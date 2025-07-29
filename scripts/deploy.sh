#!/bin/bash

# NavioX Solutions Inc. - Deployment Script
# "Charting Digital Excellence, Navigating Your Success"

echo "🚀 NavioX Deployment Script"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Please run this script from the project root.${NC}"
    exit 1
fi

# Check if project is NavioX
if ! grep -q "naviox" package.json; then
    echo -e "${RED}❌ Error: This doesn't appear to be the NavioX project.${NC}"
    exit 1
fi

echo -e "${BLUE}📋 Pre-deployment checks...${NC}"

# Check Node.js version
NODE_VERSION=$(node --version)
echo -e "${GREEN}✅ Node.js version: $NODE_VERSION${NC}"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  Dependencies not found. Installing...${NC}"
    npm install
fi

# Run build test
echo -e "${BLUE}🔨 Testing build...${NC}"
if npm run build; then
    echo -e "${GREEN}✅ Build successful!${NC}"
else
    echo -e "${RED}❌ Build failed. Please fix errors before deploying.${NC}"
    exit 1
fi

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo -e "${YELLOW}⚠️  Netlify CLI not found. Installing globally...${NC}"
    npm install -g netlify-cli
fi

# Check if user is logged in to Netlify
echo -e "${BLUE}🔐 Checking Netlify authentication...${NC}"
if ! netlify status &> /dev/null; then
    echo -e "${YELLOW}⚠️  Please log in to Netlify:${NC}"
    netlify login
fi

# Deploy options
echo -e "${BLUE}🚀 Choose deployment type:${NC}"
echo "1) Development deployment (preview)"
echo "2) Production deployment"
echo "3) Cancel"

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo -e "${BLUE}🔄 Deploying to development...${NC}"
        netlify deploy
        ;;
    2)
        echo -e "${BLUE}🔄 Deploying to production...${NC}"
        netlify deploy --prod
        ;;
    3)
        echo -e "${YELLOW}⏹️  Deployment cancelled.${NC}"
        exit 0
        ;;
    *)
        echo -e "${RED}❌ Invalid choice. Deployment cancelled.${NC}"
        exit 1
        ;;
esac

# Check deployment status
if [ $? -eq 0 ]; then
    echo -e "${GREEN}🎉 Deployment successful!${NC}"
    echo -e "${BLUE}📊 Netlify Dashboard: https://app.netlify.com${NC}"
    echo -e "${BLUE}🌐 Your site is now live!${NC}"
else
    echo -e "${RED}❌ Deployment failed. Check the errors above.${NC}"
    exit 1
fi

echo -e "${GREEN}✨ NavioX deployment complete!${NC}"
echo -e "${BLUE}🧭 Charting digital excellence across the web...${NC}" 