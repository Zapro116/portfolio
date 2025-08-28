// Netlify Function for handling contact form submissions
// This function will store contact data and send email notifications

const { MongoClient } = require("mongodb");

exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    const { name, email, company, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error:
            "Missing required fields: name, email, subject, and message are required",
        }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid email format" }),
      };
    }

    // Create contact record
    const contactRecord = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : "",
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: event.headers["x-nf-client-connection-ip"] || "unknown",
      userAgent: event.headers["user-agent"] || "unknown",
      status: "new",
    };

    // MongoDB Connection (optional - only if you set up MongoDB)
    if (process.env.MONGODB_URI) {
      try {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();

        const db = client.db("portfolio");
        const collection = db.collection("contacts");

        await collection.insertOne(contactRecord);
        await client.close();

        console.log("Contact saved to MongoDB:", contactRecord.email);
      } catch (mongoError) {
        console.error("MongoDB error (non-critical):", mongoError.message);
        // Continue execution even if MongoDB fails
      }
    }

    // Send email notification (using a service like SendGrid, Mailgun, etc.)
    if (process.env.SENDGRID_API_KEY) {
      try {
        // This would integrate with SendGrid or similar service
        // For now, we'll just log it
        console.log(
          "Email notification would be sent for:",
          contactRecord.email
        );
      } catch (emailError) {
        console.error("Email error (non-critical):", emailError.message);
      }
    }

    // Success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
        timestamp: contactRecord.timestamp,
      }),
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error:
          "Internal server error. Please try again or contact me directly.",
      }),
    };
  }
};

// Optional: Email template function
function createEmailTemplate(contactData) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${contactData.name}</p>
    <p><strong>Email:</strong> ${contactData.email}</p>
    <p><strong>Company:</strong> ${contactData.company || "Not provided"}</p>
    <p><strong>Subject:</strong> ${contactData.subject}</p>
    <p><strong>Message:</strong></p>
    <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
      ${contactData.message.replace(/\n/g, "<br>")}
    </div>
    <p><strong>Timestamp:</strong> ${contactData.timestamp}</p>
    <p><strong>IP:</strong> ${contactData.ip}</p>
  `;
}
