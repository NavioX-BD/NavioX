#!/bin/bash

# Netlify Deployment Script for NavioX
echo "🚀 Starting NavioX deployment to Netlify..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Verify images exist
echo "🖼️ Verifying images..."
npm run verify-images

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "🌐 Ready for deployment to Netlify"
    echo ""
    echo "📋 Next steps:"
    echo "1. Push your changes to GitHub"
    echo "2. Netlify will automatically deploy from your repository"
    echo "3. Check your Netlify dashboard for deployment status"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi 