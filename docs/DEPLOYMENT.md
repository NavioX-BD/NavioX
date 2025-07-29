# NavioX Solutions Inc. - Deployment Guide

## 🚀 **Netlify Git-Based Deployment**

NavioX uses **Git-based deployment** with Netlify for automatic deployments. Every push to your repository triggers a new deployment.

---

## 📋 **Prerequisites**

1. **GitHub Repository**: Your code must be in a GitHub repository
2. **Netlify Account**: Connected to your GitHub account
3. **Domain**: `navioxbd.com` (already configured)

---

## 🔧 **Setup Instructions**

### 1. **Connect Repository to Netlify**

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"New site from Git"**
3. Choose **GitHub** as your Git provider
4. Select your **NavioX repository**
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18`

### 2. **Remove Netlify Plugin (IMPORTANT)**

**This is crucial to avoid deployment errors:**

1. Go to your **Netlify Dashboard**
2. Navigate to **Site settings → Build & deploy → Build plugins**
3. **Remove** the `@netlify/plugin-nextjs` plugin if it exists
4. **Remove** any other Next.js related plugins
5. Save the changes

### 3. **Environment Variables**

Set these in Netlify Dashboard → Site settings → Environment variables:

```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_SITE_URL=https://navioxbd.com
```

### 4. **Domain Configuration**

- **Custom domain**: `navioxbd.com`
- **HTTPS**: Automatically enabled by Netlify
- **DNS**: Configured to point to Netlify

---

## 🚀 **Deployment Process**

### **Automatic Deployment**

1. **Make changes** to your code
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   git push origin main
   ```
3. **Netlify automatically**:
   - Detects the push
   - Starts building your site
   - Deploys to production
   - Updates your live site

### **Manual Deployment**

If you need to trigger a manual deployment:

1. Go to Netlify Dashboard
2. Select your site
3. Click **"Deploys"** tab
4. Click **"Trigger deploy"** → **"Deploy site"**

---

## 🔍 **Troubleshooting**

### **Common Issues**

#### 1. **Plugin Migration Errors**

**Problem**: `@netlify/plugin-nextjs` migration errors
**Solution**:

- ✅ **Remove the plugin** from Netlify Dashboard
- ✅ **Use standard Next.js build** without plugins
- ✅ **Updated configuration** in `netlify.toml`

#### 2. **Image Loading Errors (400 Bad Request)**

**Problem**: Images not loading on Netlify
**Solution**:

- ✅ **Fixed**: Set `unoptimized: true` in `next.config.ts`
- ✅ **Fixed**: Proper image caching headers in `netlify.toml`

#### 3. **Contact Page 404 Errors**

**Problem**: Contact page not found
**Solution**:

- ✅ **Fixed**: Proper routing configuration in `netlify.toml`
- ✅ **Fixed**: SPA fallback for client-side routing

#### 4. **Build Failures**

**Check**:

- Node.js version (should be 18+)
- Dependencies are up to date
- No TypeScript errors
- All required environment variables set
- **No Netlify plugins installed**

#### 5. **Performance Issues**

**Optimizations**:

- ✅ Image optimization disabled for Netlify compatibility
- ✅ Proper caching headers configured
- ✅ Static asset optimization enabled

---

## 📊 **Monitoring Deployment**

### **Netlify Dashboard**

- **Deploy Status**: Real-time build status
- **Build Logs**: Detailed error messages
- **Performance**: Core Web Vitals
- **Analytics**: Traffic and usage data

### **Deployment URLs**

- **Production**: https://navioxbd.com
- **Preview**: Available for each PR
- **Branch Deploy**: Available for feature branches

---

## 🔄 **Deployment Workflow**

### **Development Workflow**

1. **Create feature branch**:

   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make changes** and test locally:

   ```bash
   npm run dev
   ```

3. **Commit and push**:

   ```bash
   git add .
   git commit -m "Add: new feature"
   git push origin feature/new-feature
   ```

4. **Create Pull Request** on GitHub

5. **Netlify creates preview** for the PR

6. **Merge to main** triggers production deployment

### **Production Deployment**

- **Trigger**: Push to `main` branch
- **Build time**: ~2-3 minutes
- **Deployment**: Automatic after successful build
- **Rollback**: Available in Netlify dashboard

---

## 🛠️ **Configuration Files**

### **netlify.toml**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_ENV = "production"
  NEXT_TELEMETRY_DISABLED = "1"
  NODE_VERSION = "18"

# Routing and caching configuration
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### **next.config.ts**

```typescript
const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Key for Netlify compatibility
  },
  experimental: {
    optimizePackageImports: ["@heroicons/react", "framer-motion"],
  },
  trailingSlash: false,
};
```

---

## 📈 **Performance Optimization**

### **Build Optimizations**

- ✅ **Image optimization disabled** for Netlify compatibility
- ✅ **Package optimization** for faster builds
- ✅ **Static asset caching** for better performance
- ✅ **Security headers** for protection

### **Runtime Optimizations**

- ✅ **Next.js Image component** with fallbacks
- ✅ **Lazy loading** for components
- ✅ **Code splitting** for smaller bundles
- ✅ **CDN caching** via Netlify

---

## 🚨 **Emergency Procedures**

### **Quick Rollback**

1. Go to Netlify Dashboard
2. Navigate to **Deploys** tab
3. Find the last working deployment
4. Click **"Publish deploy"**

### **Manual Fix**

1. **Fix the issue** in your code
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Fix: [describe the fix]"
   git push origin main
   ```
3. **Monitor** the new deployment

---

## 📞 **Support**

### **Netlify Support**

- **Documentation**: [docs.netlify.com](https://docs.netlify.com)
- **Community**: [community.netlify.com](https://community.netlify.com)
- **Status**: [status.netlify.com](https://status.netlify.com)

### **NavioX Team**

- **Technical Issues**: Check build logs in Netlify dashboard
- **Configuration**: Review `netlify.toml` and `next.config.ts`
- **Performance**: Monitor Core Web Vitals in Netlify analytics

---

**NavioX Solutions Inc. - Charting Digital Excellence, Navigating Your Success** 🧭
