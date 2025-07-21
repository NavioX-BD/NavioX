# NavioX Solutions Inc. - Assets Directory

This directory contains all brand assets, logos, and design files for the NavioX Solutions Inc. project.

## 📁 **Directory Structure**

```
assets/
├── README.md           # This file
└── logos/              # Brand logos and banners
    ├── Logo_512px.png          # Medium logo (512x512)
    ├── Logo_1000px.png         # Large logo (1000x1000)
    ├── Banner_Logo.png         # Banner with logo
    ├── Banner_Log_4096px.png   # High-res banner (4096px)
    ├── favicon.ico             # Favicon for web browsers
    └── transparent/            # Transparent background versions
        ├── logo_transparent.png    # Transparent logo
        └── banner_transparent.png  # Transparent banner
```

## 🎨 **Brand Assets**

### **Logos Available:**

- **Logo_512px.png** - Standard logo for web use (512x512)
- **Logo_1000px.png** - High-resolution logo (1000x1000)
- **Banner_Logo.png** - Logo banner for headers
- **Banner_Log_4096px.png** - Ultra high-res banner (4096px)
- **favicon.ico** - Favicon for web browsers (37KB)

### **Transparent Versions:**

- **logo_transparent.png** - Logo with transparent background (312KB)
- **banner_transparent.png** - Banner with transparent background (93KB)

### **Web-Ready Assets:**

The following optimized versions are available in `public/`:

#### **Favicon Files:**

- **favicon.ico** - Main favicon (37KB)
- **favicon-16x16.png** - 16x16 favicon (45KB)
- **favicon-32x32.png** - 32x32 favicon (45KB)
- **apple-touch-icon.png** - Apple touch icon (45KB)
- **site.webmanifest** - PWA manifest file

#### **Brand Images:**

- **images/brand/logo.png** - Optimized logo for website use
- **images/brand/banner.png** - Optimized banner for website headers
- **images/brand/logo_transparent.png** - Transparent logo for overlays
- **images/brand/banner_transparent.png** - Transparent banner for overlays

## 🚀 **Usage Guidelines**

### **Logo Usage:**

- Use `Logo_512px.png` for standard web applications
- Use `Logo_1000px.png` for high-resolution displays
- Maintain aspect ratio when resizing
- Ensure sufficient contrast with background

### **Banner Usage:**

- Use `Banner_Logo.png` for website headers
- Use `Banner_Log_4096px.png` for print materials
- Maintain brand consistency across all applications

### **Web Implementation:**

```jsx
// Next.js Image component usage
import Image from 'next/image'

// Standard logo usage
<Image
  src="/images/brand/logo.png"
  alt="NavioX Solutions Inc."
  width={512}
  height={512}
/>

// Transparent logo for overlays
<Image
  src="/images/brand/logo_transparent.png"
  alt="NavioX Solutions Inc."
  width={512}
  height={512}
/>

// Banner usage
<Image
  src="/images/brand/banner.png"
  alt="NavioX Solutions Inc. Banner"
  width={800}
  height={200}
/>

// Transparent banner for overlays
<Image
  src="/images/brand/banner_transparent.png"
  alt="NavioX Solutions Inc. Banner"
  width={800}
  height={200}
/>
```

### **Favicon Implementation:**

```tsx
// Next.js metadata handles all favicon links automatically
// Files are served from public/ directory:

// In layout.tsx metadata:
icons: {
  icon: [
    { url: '/favicon.ico' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
},
manifest: '/site.webmanifest',
```

### **PWA Support:**

```json
// site.webmanifest provides Progressive Web App support
{
  "name": "NavioX Solutions Inc.",
  "short_name": "NavioX",
  "description": "Charting Digital Excellence, Navigating Your Success",
  "theme_color": "#2563eb"
}
```

## 🎯 **Brand Colors**

Based on the NavioX brand identity:

### **Primary Palette:**

- **Navy Blue:** #2563eb (navigation, trust)
- **Ocean Blue:** #0ea5e9 (innovation, flow)
- **Deep Sea:** #1e40af (stability, depth)

### **Secondary Palette:**

- **Compass Gold:** #f59e0b (guidance, premium)
- **Anchor Gray:** #6b7280 (reliability, balance)
- **Lighthouse White:** #ffffff (clarity, openness)

## 📋 **File Specifications**

| File                   | Dimensions   | Size  | Usage              |
| ---------------------- | ------------ | ----- | ------------------ |
| Logo_512px.png         | 512x512      | 45KB  | Web standard       |
| Logo_1000px.png        | 1000x1000    | 177KB | High-res displays  |
| Banner_Logo.png        | Variable     | 121KB | Headers/banners    |
| Banner_Log_4096px.png  | 4096px wide  | 221KB | Print/high-res     |
| favicon.ico            | 16x16, 32x32 | 37KB  | Browser favicon    |
| logo_transparent.png   | 512x512      | 312KB | Transparent logo   |
| banner_transparent.png | Variable     | 93KB  | Transparent banner |

## 🔗 **Related Documentation**

- **[Brand Story](../docs/brand/BRAND_STORY.md)** - Complete brand identity and philosophy
- **[Project Info](../docs/project/PROJECT_INFO.md)** - Brand guidelines and specifications
- **[Quick Reference](../docs/QUICK_REFERENCE.md)** - Brand colors and usage guide

---

**NavioX Solutions Inc. - Charting Digital Excellence, Navigating Your Success**
