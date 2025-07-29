# NavioX Team Images

This directory contains team member profile photos for the NavioX website.

## Required Images

The following team member photos are referenced in the Team page:

### Leadership Team

- `ceo.jpg` - Ahmed Rahman (CEO)
- `cto.jpg` - Sarah Chen (CTO)
- `lead-engineer.jpg` - David Kim (Lead Software Engineer)
- `design-lead.jpg` - Maria Rodriguez (UX/UI Design Lead)
- `devops-engineer.jpg` - Alex Thompson (DevOps Engineer)
- `project-manager.jpg` - Priya Patel (Project Manager)

## Image Specifications

- **Format**: JPG or PNG
- **Size**: 400x400 pixels (1:1 aspect ratio)
- **Quality**: High resolution, professional headshots
- **Style**: Professional, consistent branding
- **Background**: Clean, neutral background

## Placeholder Images

Until actual team photos are available, the Team page uses:

- **Avatar initials** in colored circles
- **Professional styling** with gradient backgrounds
- **Consistent branding** with NavioX colors

## Usage

Team images are automatically displayed on the `/team` page. The system will:

1. Try to load the actual image file
2. Fall back to avatar initials if image is not found
3. Maintain consistent styling across all team members

## Adding New Team Members

To add a new team member:

1. Add their photo to this directory
2. Update the `teamMembers` array in `src/app/team/page.tsx`
3. Include their name, role, expertise, and contact information

---

**Note**: All team member information is fictional and for demonstration purposes only.
