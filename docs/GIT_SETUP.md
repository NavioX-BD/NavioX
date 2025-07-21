# NavioX Solutions Inc. - Git Setup Guide

> **"Charting Digital Excellence, Navigating Your Success"**

## 🔗 **Repository Information**

- **Repository:** [https://github.com/NavioX-BD/NavioX](https://github.com/NavioX-BD/NavioX)
- **Type:** Organization Repository
- **Organization:** [NavioX-BD](https://github.com/NavioX-BD)
- **License:** MIT

---

## 🚀 **Initial Setup**

### **1. Clone the Repository**

```bash
# Clone the organization repository
git clone https://github.com/NavioX-BD/NavioX.git
cd NavioX

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual values
```

### **2. Verify Setup**

```bash
# Check repository status
git status

# Verify remote origin
git remote -v

# Check current branch
git branch
```

---

## 🌿 **Branching Strategy**

### **Main Branches:**

- **`main`** - Production-ready code
- **`develop`** - Development integration branch
- **`feature/*`** - Feature development branches
- **`hotfix/*`** - Emergency fixes

### **Branch Naming Convention:**

```bash
# Features
feature/firebase-integration
feature/admin-dashboard
feature/client-portal

# Bug fixes
bugfix/favicon-404-error
bugfix/hydration-warning

# Hotfixes
hotfix/security-patch
hotfix/critical-bug-fix
```

---

## 📋 **Commit Guidelines**

### **Commit Message Format:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

### **Types:**

- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Code style changes (formatting, etc.)
- **refactor:** Code refactoring
- **test:** Adding or updating tests
- **chore:** Build process or auxiliary tool changes

### **Examples:**

```bash
feat(auth): add Firebase authentication integration
fix(favicon): resolve 404 errors for favicon files
docs(readme): update repository information
style(tailwind): add NavioX brand colors
refactor(components): organize UI component structure
```

---

## 🔄 **Workflow**

### **Feature Development:**

```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat(scope): add new feature"

# Push to remote
git push origin feature/new-feature

# Create Pull Request on GitHub
```

### **Deployment Process:**

```bash
# Merge to develop for testing
git checkout develop
git merge feature/new-feature

# Merge to main for production
git checkout main
git merge develop
git push origin main
```

---

## 🛡️ **Security & Access**

### **Organization Repository Access:**

- Repository belongs to NavioX-BD organization
- Use SSH keys or personal access tokens for authentication
- Follow organization security policies and guidelines
- Never commit sensitive information (API keys, passwords, etc.)

### **Environment Variables:**

```bash
# Never commit these files:
.env
.env.local
.env.production

# Always use .env.example as template
```

---

## 📊 **Project Status Tracking**

### **GitHub Issues:**

- **Bug Reports:** [Create Issue](https://github.com/NavioX-BD/NavioX/issues/new?template=bug_report.md)
- **Feature Requests:** [Create Issue](https://github.com/NavioX-BD/NavioX/issues/new?template=feature_request.md)
- **Questions:** [Create Discussion](https://github.com/NavioX-BD/NavioX/discussions)

### **Labels:**

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `priority: high` - High priority issues

---

## 🔧 **Development Commands**

### **Git Aliases (Optional):**

```bash
# Add useful git aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

### **Useful Git Commands:**

```bash
# Check what changed
git diff
git diff --staged

# View commit history
git log --oneline
git log --graph --oneline --all

# Undo changes
git checkout -- <file>          # Discard changes in working directory
git reset HEAD <file>            # Unstage changes
git reset --soft HEAD~1          # Undo last commit (keep changes)
git reset --hard HEAD~1          # Undo last commit (discard changes)
```

---

## 📞 **Support & Contact**

### **Repository Organization:**

- **GitHub:** [@NavioX-BD](https://github.com/NavioX-BD)
- **Issues:** [NavioX Issues](https://github.com/NavioX-BD/NavioX/issues)

### **Contributing:**

1. Fork the repository (if public contributions are allowed)
2. Create a feature branch
3. Make your changes
4. Submit a pull request
5. Follow the code review process

---

**NavioX Solutions Inc. - Where every commit charts a course to your success.**
