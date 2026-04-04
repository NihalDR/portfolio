
import { Project, Experience, SkillCategory, Achievement, Certificate, Patent } from '../types';

export const PERSONAL_INFO = {
  name: "Nihal D R",
  title: "AI & Data Science Engineer",
  bio: "Computer Science student specializing in Artificial Intelligence and Data Science, building practical, data-driven solutions using machine learning and modern web technologies.",
  profileImage: "https://i.postimg.cc/g2pk5Rdf/image.png",
  resumeUrl: "resume.pdf",
  education: {
    degree: "Bachelor of Engineering – Artificial Intelligence & Data Science",
    institution: "CMR Institute of Technology, Bangalore",
    cgpa: "8.55 / 10",
    graduation: "2027"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/nihaldr77/",
    github: "https://github.com/NihalDR/",
    leetcode: "https://leetcode.com/u/nihaldr77/",
    email: "nidr23ainds@cmrit.ac.in",
    altEmail: "nihaldr77@gmail.com",
    phone: "+91-9110225511"
  }
};

export const CERTIFICATES: Certificate[] = [
  {
    title: "Divide and Conquer, Sorting, and Searching Algorithms",
    issuer: "Stanford Online"
  },
  {
    title: "Python for Data science",
    issuer: "NPTEL (Elite)"
  },
  {
    title: "Prompt Engineering and Programming with OpenAI",
    issuer: "Columbia+"
  },
  {
    title: "Machine Learning I",
    issuer: "Columbia+"
  }
];

export const PATENTS: Patent[] = [
  {
    id: "pat1",
    title: "AloeCharge",
    description: "Bio-electrochemical cell innovation focused on sustainable energy generation using organic matter.",
    status: "Patent Filed",
    impact: "Increased energy transfer efficiency by 15% through optimized bio-electrochemical interactions."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C/C++", "Scala", "JavaScript", "TypeScript"],
    icon: "Code"
  },
  {
    title: "Machine Learning & AI",
    skills: ["Supervised Learning", "Unsupervised Learning", "CNNs", "Predictive Modeling", "Generative AI", "LLMs"],
    icon: "Cpu"
  },
  {
    title: "Data Analysis & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau", "Excel"],
    icon: "BarChart3"
  },
  {
    title: "Web Development",
    skills: ["React.js", "Node.js", "Express.js", "FastAPI", "Tailwind CSS"],
    icon: "Globe"
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "MongoDB", "Supabase", "Azure", "GCP", "IBM Cloud"],
    icon: "Database"
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
    icon: "Wrench"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Google Gemini Student Ambassador",
    company: "Google",
    duration: "June 2025 – December 2025",
    description: "Leading tech initiatives and representing Google Gemini AI across the student community."
  },
  {
    id: "exp2",
    role: "Data Analytics Intern",
    company: "Edunet–VOIS",
    duration: "September 2025 (4 weeks)",
    description: "Applied advanced analytics with LLMs and executed end-to-end data analysis projects."
  },
  {
    id: "exp3",
    role: "AI & Cloud Intern",
    company: "Edunet–IBM",
    duration: "August 2025 (4 weeks)",
    description: "Built predictive ML models and conducted comprehensive data preprocessing using IBM Cloud tools."
  },
  {
    id: "exp4",
    role: "Microsoft AI Azure Intern",
    company: "Edunet–Microsoft",
    duration: "June 2025 (4 weeks)",
    description: "Focused on building and deploying AI solutions on Azure Cloud platform."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Lingam Aabharanam",
    description: "Collaborative filtering-based recommendation system integrated into an e-commerce jewelry platform.",
    tech: ["TypeScript", "TailwindCSS", "Supabase", "React"],
    features: ["Personalized UX", "Seamless Data Flow", "Responsive Interface", "Cloud-hosted Backend"],
    image: "https://picsum.photos/800/600?random=1",
    github: "https://github.com/NihalDR/Lingam_Aabharanam",
    demo: "https://lingamaabharanam.netlify.app/"
  },
  {
    id: "p3",
    title: "CMRIT College Bot",
    description: "GenAI-powered chatbot providing instant access to institutional information using Gemini API.",
    tech: ["Gemini API", "TypeScript", "Tailwind CSS", "React"],
    features: ["Real-time Responses", "Structured Data Preprocessing", "Interactive UI"],
    image: "https://picsum.photos/800/600?random=3",
    github: "https://github.com/NihalDR/college-chatbot",
    demo: "https://nihaldr.github.io/college-chatbot/"
  },
  {
    id: "p6",
    title: "Face Recognition Attendance System",
    description: "A robust, bilingual, real-time face recognition system for automated attendance tracking using deep learning architectures.",
    tech: ["YOLOv8", "DeepFace", "TensorFlow", "OpenCV", "Python"],
    features: ["Bilingual UI Support", "Real-time Tracking", "Region of Interest (ROI) Analysis", "CSV-based Attendance Logging", "Frame Skipping Optimization"],
    image: "https://picsum.photos/800/600?random=6",
    github: "https://github.com/NihalDR/Attendence_ms"
  },
  {
    id: "p5",
    title: "Adaptive Timetable System",
    description: "Automated timetable generation system using constraint-based DSA methods and Flask backend.",
    tech: ["Python", "Flask", "DSA", "JavaScript"],
    features: ["Backtracking Algorithms", "Conflict-free Generation", "Multi-branch Support"],
    image: "https://picsum.photos/800/600?random=5"
  },
  {
    id: "p4",
    title: "Student Performance Predictor",
    description: "Supervised learning task demonstrating the end-to-end workflow for predicting student academic outcomes.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    features: ["Predictive Modeling", "Feature Engineering", "Data Visualization"],
    image: "https://picsum.photos/800/600?random=4",
    github: "https://github.com/NihalDR/Student-Performance-Predictor",
    demo: "https://nihaldr.github.io/Student-Performance-Predictor/"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Winner - FullStack Odyssey Hackathon",
    description: "Secured top place for excellence in full-stack architecture and innovation.",
    year: "2025"
  },
  {
    title: "Top Performer India - Google Student Ambassador",
    description: "Recognized as a leading ambassador in India for the 2025-26 cycle.",
    year: "2025-26"
  },
  {
    title: "1st Place - Byte Battle",
    description: "CMRIT competitive programming competition champion.",
    year: "2025"
  },
  {
    title: "3rd Place - Think-Build Project Expo",
    description: "Awarded for the E-commerce platform 'Lingam Aabharanam'.",
    year: "2025"
  },
  {
    title: "Rajya Puraskar - Scouts",
    description: "State-level Governor's award for discipline and community service excellence.",
    year: ""
  }
];
