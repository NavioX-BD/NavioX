import blogsData from "../data/blogs.json";
import careersData from "../data/careers.json";
import companyStats from "../data/company-stats.json";
import projectsData from "../data/projects.json";
import teamData from "../data/team.json";

export const loadCompanyStats = () => companyStats;
export const loadTeamData = () => teamData;
export const loadProjectsData = () => projectsData;
export const loadCareersData = () => careersData;
export const loadBlogsData = () => blogsData;

// Type definitions for better TypeScript support
export interface CompanyStats {
  companyStats: Array<{
    number: string;
    label: string;
  }>;
  leadershipStats: Array<{
    number: string;
    label: string;
  }>;
  successMetrics: Array<{
    metric: string;
    label: string;
    description: string;
  }>;
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  education: string;
  image: string;
  bio: string;
  skills: string[];
  linkedin: string;
  email: string;
  location: string;
  achievements: string[];
}

export interface TeamData {
  leadershipTeam: TeamMember[];
  teamMembers: TeamMember[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  client: string;
  duration: string;
  results: string[];
}

export interface ProjectStats {
  totalProjects: string;
  completedProjects: string;
  ongoingProjects: string;
  clientSatisfaction: string;
  averageDeliveryTime: string;
  technologiesUsed: string;
}

export interface ProjectsData {
  projectStats: ProjectStats;
  featuredProjects: Project[];
  projectCategories: Array<{
    name: string;
    count: number;
    description: string;
  }>;
}

export interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface CareersData {
  openPositions: JobPosition[];
  companyCulture: Array<{
    title: string;
    description: string;
    icon: string;
    color: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
    color: string;
  }>;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string;
}

export interface BlogStats {
  totalPosts: string;
  monthlyReaders: string;
  categories: string;
  averageReadTime: string;
}

export interface BlogsData {
  blogStats: BlogStats;
  featuredPosts: BlogPost[];
  blogCategories: Array<{
    name: string;
    count: number;
    description: string;
  }>;
}
