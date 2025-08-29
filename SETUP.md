# 🚀 Portfolio Setup Guide - New Machine

> Complete setup guide for accessing and developing the Hariom Chaurasia portfolio on a new laptop/machine.

## 📋 **Prerequisites (Install First)**

### 🛠️ **Required Software**

1. **Node.js 18+**

   ```bash
   # Download from: https://nodejs.org/
   # Verify installation:
   node --version    # Should be 18.x.x or higher
   npm --version     # Should be 8.x.x or higher
   ```

2. **Git**

   ```bash
   # Download from: https://git-scm.com/
   # Verify installation:
   git --version
   ```

3. **Code Editor** (Recommended: VS Code)

   ```bash
   # Download from: https://code.visualstudio.com/
   ```

4. **Terminal/Command Line**
   - macOS: Terminal (built-in) or iTerm2
   - Windows: Git Bash, PowerShell, or Windows Terminal
   - Linux: Any terminal emulator

### 🔑 **Account Access Requirements**

- **GitHub Account**: Access to `https://github.com/Zapro116/portfolio`
- **Netlify Account**: For deployment and function management
- **MongoDB Atlas Account**: For database access (optional for local development)

## 🔄 **Step-by-Step Setup Process**

### **Step 1: Clone Repository**

```bash
# Clone the repository
git clone https://github.com/Zapro116/portfolio.git
cd portfolio

# Verify you're in the right directory
ls -la
# Should see: src/, public/, netlify/, package.json, README.md, etc.
```

### **Step 2: Install Dependencies**

```bash
# Install all project dependencies
npm install

# Verify installation
npm ls --depth=0
# Should show React, Vite, Framer Motion, etc.
```

### **Step 3: Install Global Tools**

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Verify installation
netlify --version
# Should show: netlify-cli/23.x.x or higher
```

### **Step 4: Authentication Setup**

#### **Git Configuration**

```bash
# Set up Git identity (if not done globally)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Verify GitHub access
git remote -v
# Should show: origin https://github.com/Zapro116/portfolio.git
```

#### **Netlify Authentication**

```bash
# Login to Netlify
netlify login
# This will open browser for authentication

# Link to existing site
netlify link
# Choose "Use current git remote origin (Zapro116/portfolio)"
# Or manually select: hariom-chaurasia
```

### **Step 5: Environment Variables (Local Development)**

#### **For Local Development** (Optional)

Create `.env.local` file in project root:

```bash
# Create local environment file
touch .env.local
```

Add to `.env.local` (if you want to test functions locally):

```env
# MongoDB Connection (for local function testing)
MONGODB_URI=mongodb+srv://portfolio-user:<password>@portfolio-cluster.lhqfqn4.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-cluster

# Other optional variables
NODE_ENV=development
```

**Note**: `.env.local` is in `.gitignore` - never commit this file!

### **Step 6: Verify Setup**

#### **Test Local Development**

```bash
# Start development server
npm run dev

# Should open: http://localhost:5173
# Verify all sections load correctly:
# - Hero section with floating elements
# - About, Experience, Projects, Skills
# - Contact form (will show dev mode banner)
```

#### **Test Production Build**

```bash
# Build for production
npm run build

# Preview production build
npm run preview
# Should open: http://localhost:4173
```

#### **Test Netlify Functions Locally**

```bash
# Install Netlify Dev (if needed)
npm install -g @netlify/cli

# Start local Netlify dev environment
netlify dev
# Should start on: http://localhost:8888
# Functions available at: /.netlify/functions/contact
```

### **Step 7: Deployment Verification**

#### **Check Current Deployment**

```bash
# Check Netlify status
netlify status

# Should show:
# Current project: hariom-chaurasia
# Project URL: https://hariom-chaurasia.netlify.app
```

#### **Deploy Changes (when ready)**

```bash
# Deploy to production
netlify deploy --prod

# Or use npm script
npm run deploy
```

## 🔧 **Common Issues & Solutions**

### **Issue 1: Node.js Version Mismatch**

```bash
# Check current version
node --version

# If version is < 18, upgrade Node.js
# Download from: https://nodejs.org/
```

### **Issue 2: Permission Errors (macOS/Linux)**

```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

### **Issue 3: Netlify CLI Not Found**

```bash
# Reinstall globally
npm uninstall -g netlify-cli
npm install -g netlify-cli
```

### **Issue 4: Git Authentication Issues**

```bash
# For HTTPS (recommended)
git remote set-url origin https://github.com/Zapro116/portfolio.git

# For SSH (if you have SSH keys set up)
git remote set-url origin git@github.com:Zapro116/portfolio.git
```

### **Issue 5: MongoDB Connection Issues (Local Testing)**

- Ensure `.env.local` has correct `MONGODB_URI`
- Check MongoDB Atlas IP whitelist includes your new machine's IP
- For local development, database connection is optional

## 📁 **Project Structure Verification**

After setup, your project should look like:

```
portfolio/
├── .env.local              # ❗ Local only - never commit
├── .git/                   # Git repository data
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
├── SETUP.md                # This setup guide
├── package.json            # Dependencies and scripts
├── package-lock.json       # Dependency lock file
├── vite.config.js          # Vite configuration
├── index.html              # Main HTML template
├── eslint.config.js        # Code linting rules
├── netlify.toml            # Netlify configuration
├── public/
│   ├── me.jpeg             # Profile favicon
│   └── vite.svg            # Vite logo
├── src/
│   ├── components/         # React components
│   ├── assets/             # Images and media
│   ├── utils/              # Utility functions & constants
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   └── main.jsx            # App entry point
└── netlify/
    └── functions/          # Serverless functions
        └── contact.js      # Contact form handler
```

## 🧪 **Testing Checklist**

### **✅ Local Development Tests**

- [ ] `npm run dev` starts successfully
- [ ] Website loads at http://localhost:5173
- [ ] All sections render correctly
- [ ] Floating elements animate properly
- [ ] Contact form shows "development mode" banner
- [ ] Quiz game works
- [ ] All navigation links work

### **✅ Build Tests**

- [ ] `npm run build` completes without errors
- [ ] `npm run preview` shows production version
- [ ] All assets load correctly
- [ ] No console errors in browser

### **✅ Function Tests (Optional)**

- [ ] `netlify dev` starts successfully
- [ ] Contact form submits without errors (local)
- [ ] Function logs show successful execution

### **✅ Deployment Tests**

- [ ] `netlify status` shows correct site info
- [ ] `netlify deploy --prod` deploys successfully
- [ ] Live site loads: https://hariom-chaurasia.netlify.app
- [ ] Contact form works on live site

## 📞 **Support & Resources**

### **Documentation Links**

- [Portfolio Live Site](https://hariom-chaurasia.netlify.app)
- [GitHub Repository](https://github.com/Zapro116/portfolio)
- [Netlify Dashboard](https://app.netlify.com/projects/hariom-chaurasia)
- [MongoDB Atlas](https://cloud.mongodb.com)

### **Development Resources**

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)

### **Troubleshooting**

- Check browser console for JavaScript errors
- Review Netlify function logs for backend issues
- Verify environment variables are set correctly
- Ensure all dependencies are installed

---

## 🎯 **Quick Start Commands**

Once everything is set up, these are your daily commands:

```bash
# Start development
npm run dev

# Build for production
npm run build

# Deploy to Netlify
npm run deploy

# Check linting
npm run lint
```

**Your portfolio should now be fully functional on the new machine!** 🎉
