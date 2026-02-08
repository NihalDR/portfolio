
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description?: string;
  logo?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  link?: string;
}

export interface Patent {
  id: string;
  title: string;
  description: string;
  status: string;
  impact: string;
}
