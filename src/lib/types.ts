// User Types
export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: "admin" | "client" | "team";
  company?: string;
  createdAt: Date;
  profile: {
    avatar?: string;
    bio?: string;
    phone?: string;
  };
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  clientId?: string;
  status: "completed" | "ongoing" | "planned";
  featured: boolean;
  createdAt: Date;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  featuredImage: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing?: {
    basic: number;
    standard: number;
    premium: number;
  };
  icon: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  projectId?: string;
  featured: boolean;
  createdAt: Date;
}

// Contact Types
export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "replied" | "resolved";
  createdAt: Date;
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}
