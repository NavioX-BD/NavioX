const fs = require("fs");
const path = require("path");

// Function to check if file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

// Function to extract image paths from a file
function extractImagePaths(content) {
  const imageRegex = /src=["']([^"']*\.(png|jpg|jpeg|gif|svg|webp))["']/g;
  const matches = [...content.matchAll(imageRegex)];
  return matches.map((match) => match[1]);
}

// Function to check all image references
function verifyImages() {
  console.log("🔍 Verifying image paths...\n");

  // Check public/images directory structure
  const publicImagesDir = path.join(__dirname, "../public/images");

  if (!fileExists(publicImagesDir)) {
    console.error("❌ public/images directory does not exist!");
    return;
  }

  // Check brand images
  const brandDir = path.join(publicImagesDir, "brand");
  const bgDir = path.join(publicImagesDir, "bg");

  console.log("📁 Checking brand images:");
  if (fileExists(brandDir)) {
    const brandFiles = fs.readdirSync(brandDir);
    brandFiles.forEach((file) => {
      console.log(`  ✅ ${file}`);
    });
  } else {
    console.error("  ❌ brand directory does not exist!");
  }

  console.log("\n📁 Checking background images:");
  if (fileExists(bgDir)) {
    const bgFiles = fs.readdirSync(bgDir);
    bgFiles.forEach((file) => {
      console.log(`  ✅ ${file}`);
    });
  } else {
    console.error("  ❌ bg directory does not exist!");
  }

  // Check specific files that are referenced in code
  const criticalImages = [
    "/images/brand/banner_transparent.png",
    "/images/brand/banner.png",
    "/images/brand/logo.png",
    "/images/brand/logo_transparent.png",
    "/images/bg/page-bg-1.jpg",
    "/images/bg/page-bg-dark-1.jpg",
    "/images/bg/page-bg-dark-2.jpg",
  ];

  console.log("\n🔗 Checking critical image references:");
  criticalImages.forEach((imagePath) => {
    const fullPath = path.join(__dirname, "../public", imagePath);
    if (fileExists(fullPath)) {
      console.log(`  ✅ ${imagePath}`);
    } else {
      console.error(`  ❌ ${imagePath} - FILE MISSING!`);
    }
  });

  console.log("\n✅ Image verification complete!");
}

// Run the verification
verifyImages();
