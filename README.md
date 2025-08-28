# 💼 Hariom Chaurasia - Portfolio Website

> A modern, interactive portfolio showcasing 3.5+ years of Software Development Engineering experience with React.js, GenAI systems, and scalable web applications.

<div align="center">

[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646cff?style=flat&logo=vite)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-0055ff?style=flat&logo=framer)](https://www.framer.com/motion/)

[🚀 **Live Demo**](https://hariom-chaurasia.netlify.app) • [📱 **Mobile View**](https://hariom-chaurasia.netlify.app) • [🎮 **Try Quiz Game**](https://hariom-chaurasia.netlify.app/#home)

</div>

## ✨ Features

### 🎯 **Core Functionality**

- **🌙 Modern Dark Theme** - Professional, easy-on-the-eyes design
- **📱 Fully Responsive** - Perfect on desktop, tablet, and mobile
- **⚡ Lightning Fast** - Built with Vite for optimal performance
- **🎭 Smooth Animations** - Framer Motion powered transitions
- **📧 Functional Contact Form** - Direct submissions via Netlify Functions

### 🎮 **Interactive Elements**

- **🧠 Tech Challenge Quiz** - Engaging quiz game with 20+ tech questions
- **🌊 Floating Tech Icons** - Dynamic React, JS, Webpack, and Vite animations
- **⌨️ TypeWriter Effect** - Dynamic role descriptions in hero section
- **📊 Scroll Progress Bar** - Visual page navigation indicator
- **🎯 Smooth Scrolling** - Seamless section navigation

### 💼 **Professional Sections**

- **🏠 Hero Section** - Introduction with animated statistics
- **👤 About Me** - Experience highlights and achievements
- **💼 Experience** - Card-based work history with real projects
- **🛠️ Projects** - Interactive project showcase with filters
- **🎯 Skills** - Categorized skill visualization with proficiency levels
- **📞 Contact** - Functional form with development/production modes

## 🛠️ Tech Stack

<div align="center">

|    **Frontend**     | **Backend & Deployment** | **Development Tools** |
| :-----------------: | :----------------------: | :-------------------: |
|      React 19       |    Netlify Functions     |         Vite          |
|   JavaScript/ES6+   |      MongoDB Atlas       |        ESLint         |
| CSS3 (Grid/Flexbox) |       SendGrid API       |          Git          |
|    Framer Motion    |     Netlify Hosting      |          npm          |
|     React Icons     |      CORS Handling       |        VS Code        |

</div>

### 🔧 **Key Dependencies**

```json
{
  "react": "^19.0.0",
  "framer-motion": "^11.0.0",
  "react-icons": "^5.0.0",
  "react-intersection-observer": "^9.0.0",
  "react-toastify": "^10.0.0",
  "@emailjs/browser": "^4.0.0"
}
```

## 📁 Project Architecture

```
portfolio/
├── 📂 public/                    # Static assets
├── 📂 src/
│   ├── 📂 components/           # React Components
│   │   ├── 🧩 Header.jsx       # Navigation with profile image
│   │   ├── 🎯 Hero.jsx         # Landing with floating elements
│   │   ├── 👤 About.jsx        # Professional summary
│   │   ├── 💼 Experience.jsx   # Work history cards
│   │   ├── 🛠️ Projects.jsx     # Project showcase with filters
│   │   ├── 🎯 Skills.jsx       # Skill categories & proficiency
│   │   ├── 📞 Contact.jsx      # Contact form with validation
│   │   ├── 🔗 Footer.jsx       # Links and social media
│   │   ├── 🎮 TechQuizGame.jsx # Interactive quiz component
│   │   ├── 🎈 FloatingGameButton.jsx # Game trigger button
│   │   ├── 📊 ScrollProgress.jsx # Page scroll indicator
│   │   └── ⌨️ TypeWriter.jsx   # Animated text component
│   ├── 📂 utils/
│   │   └── 📋 constant.jsx     # Centralized data constants
│   ├── 📂 assets/              # Images and media files
│   ├── 🎨 App.css             # Global styles & theme variables
│   ├── 🚀 App.jsx             # Main application component
│   └── 🔌 main.jsx            # Application entry point
├── 📂 netlify/
│   └── 📂 functions/          # Serverless Functions
│       ├── 📧 contact.js      # Contact form handler
│       └── 📦 package.json    # Function dependencies
├── ⚙️ netlify.toml            # Netlify configuration
├── 🔧 vite.config.js          # Vite build configuration
└── 📋 package.json            # Project dependencies & scripts
```

## 🚀 Quick Start

### 📋 **Prerequisites**

- Node.js 18+
- npm or yarn
- Git

### ⚡ **Installation**

1. **📥 Clone the repository**

   ```bash
   git clone https://github.com/Zapro116/portfolio.git
   cd portfolio
   ```

2. **📦 Install dependencies**

   ```bash
   npm install
   ```

3. **🚀 Start development server**

   ```bash
   npm run dev
   ```

4. **🌐 Open in browser**
   ```
   http://localhost:5173
   ```

### 🏗️ **Build Commands**

```bash
# 🔨 Development
npm run dev          # Start dev server with hot reload

# 📦 Production
npm run build        # Build optimized production bundle
npm run preview      # Preview production build locally

# 🧹 Code Quality
npm run lint         # Run ESLint for code quality

# 🚀 Deployment
npm run deploy       # Build and deploy to Netlify
npm run serve        # Serve production build locally
```

## 🌐 Deployment Guide

### 🔵 **Deploy to Netlify** (Recommended)

1. **📤 Push to GitHub**

   ```bash
   git add .
   git commit -m "feat: initial portfolio setup"
   git push origin main
   ```

2. **🔗 Connect to Netlify**

   - Visit [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Functions directory**: `netlify/functions`

3. **⚙️ Environment Variables** _(Optional)_

   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

4. **🌐 Custom Domain** _(Optional)_
   - Add custom domain in Netlify dashboard
   - Configure DNS with your domain provider

### 📧 **Contact Form Configuration**

#### 🎯 **Basic Setup** (Works immediately)

- ✅ Form submissions logged in Netlify Functions
- ✅ Real-time form validation
- ✅ Success/error notifications
- ✅ Development mode simulation

#### 💾 **MongoDB Storage** _(Optional Enhancement)_

1. Create [MongoDB Atlas](https://cloud.mongodb.com) account
2. Set up database cluster
3. Add `MONGODB_URI` environment variable
4. Contact submissions automatically stored

#### 📨 **Email Notifications** _(Optional Enhancement)_

1. Sign up for [SendGrid](https://sendgrid.com) account
2. Generate API key
3. Add `SENDGRID_API_KEY` environment variable
4. Receive email notifications for submissions

## 🎨 Customization Guide

### 📝 **Personal Information**

Update `/src/utils/constant.jsx`:

```javascript
export const name = "Your Name";
export const role = "Your Role";
export const email = "your.email@example.com";
export const github = "https://github.com/yourusername";
export const linkedin = "https://linkedin.com/in/yourprofile";
// ... other constants
```

### 🎯 **Content Sections**

| Component        | Purpose              | Key Updates                                  |
| ---------------- | -------------------- | -------------------------------------------- |
| `Hero.jsx`       | Landing section      | Name, role, social links, statistics         |
| `About.jsx`      | Professional summary | Experience highlights, achievements          |
| `Experience.jsx` | Work history         | Companies, roles, technologies, achievements |
| `Projects.jsx`   | Project showcase     | Project details, GitHub links, live demos    |
| `Skills.jsx`     | Technical skills     | Technologies, proficiency levels, categories |

### 🎨 **Theme Customization**

Update CSS variables in `/src/App.css`:

```css
:root {
  --primary-color: #3b82f6; /* Brand primary */
  --secondary-color: #8b5cf6; /* Brand secondary */
  --accent-color: #06b6d4; /* Accent highlights */
  --bg-primary: #0f172a; /* Main background */
  --bg-secondary: #1e293b; /* Card backgrounds */
  --text-primary: #f8fafc; /* Primary text */
  --text-secondary: #cbd5e1; /* Secondary text */
}
```

## 📊 Performance Features

- ⚡ **Vite Build Tool** - Lightning-fast development and optimized builds
- 🔄 **Code Splitting** - Automatic bundle optimization
- 🖼️ **Image Optimization** - Efficient asset loading and caching
- 📱 **Responsive Design** - Mobile-first approach with breakpoints
- 🎭 **Animation Performance** - GPU-accelerated Framer Motion animations
- 📈 **SEO Optimized** - Meta tags and structured data
- 💾 **Caching Strategy** - Aggressive caching for static assets

## 🧪 Interactive Features

### 🎮 **Tech Challenge Quiz**

- 20+ carefully curated tech questions
- Randomized question selection (8 per game)
- Real-time scoring and feedback
- Engaging for developers and HR professionals
- Floating game button with particle effects

### 🌊 **Floating Tech Icons**

- **React** (Official SVG) - Framework expertise
- **JavaScript** (Brand yellow) - Core language skills
- **Webpack** (Build tool) - Complex project experience
- **Vite** (Modern purple) - Cutting-edge development

### ⌨️ **TypeWriter Animation**

- Dynamic role descriptions
- Smooth typing and deleting effects
- Multiple role rotations
- Customizable speed and pause duration

## 📱 Browser Support

| Browser       | Version | Status             |
| ------------- | ------- | ------------------ |
| Chrome        | Latest  | ✅ Fully Supported |
| Firefox       | Latest  | ✅ Fully Supported |
| Safari        | Latest  | ✅ Fully Supported |
| Edge          | Latest  | ✅ Fully Supported |
| Mobile Chrome | Latest  | ✅ Fully Supported |
| Mobile Safari | iOS 12+ | ✅ Fully Supported |

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are always welcome!

1. 🍴 Fork the repository
2. 🌿 Create feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit changes (`git commit -m 'feat: add amazing feature'`)
4. 📤 Push to branch (`git push origin feature/amazing-feature`)
5. 🔀 Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Get In Touch

<div align="center">

**🧑‍💻 Hariom Chaurasia**  
_Software Development Engineer | React.js Specialist | GenAI Enthusiast_

[![Email](https://img.shields.io/badge/Email-hariom4b62%40gmail.com-red?style=flat&logo=gmail)](mailto:hariom4b62@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-hariom--chaurasia-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/hariom-chaurasia/)
[![GitHub](https://img.shields.io/badge/GitHub-Zapro116-black?style=flat&logo=github)](https://github.com/Zapro116)
[![Product Hunt](https://img.shields.io/badge/Product_Hunt-Fynix_Maker-orange?style=flat&logo=producthunt)](https://www.producthunt.com/products/fynix-2)

</div>

### 🌟 **Portfolio Highlights**

- 🏆 **Fynix AI** - #1 Product of the Day on Product Hunt
- 🚀 **3.5+ Years** - Software Development Engineering Experience
- 🔧 **85%+ Code Coverage** - Quality-driven development approach
- 💼 **Enterprise Experience** - FYND & Innovaccer contributions
- 🎯 **Modern Stack** - React, TypeScript, GenAI, Microservices

---

<div align="center">

**Built with ❤️ using React.js, Framer Motion, and modern web technologies**  
_Deployed on Netlify • Optimized for Performance • Designed for Impact_

⭐ **Star this repo if you found it helpful!** ⭐

</div>
