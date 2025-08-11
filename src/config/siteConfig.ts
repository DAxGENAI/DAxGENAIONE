export interface SiteConfig {
  site: {
    name: string;
    title: string;
    description: string;
    url: string;
    email: string;
    phone: string;
    location: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
    youtube: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Array<{
      value: string;
      label: string;
      icon: string;
    }>;
  };
  tools: Array<{
    name: string;
    category: string;
    difficulty: string;
    marketDemand: string;
    features: string[];
    gradient: string;
    description: string;
  }>;
  achievements: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  expertise: string[];
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    course: string;
    content: string;
    rating: number;
    image?: string;
  }>;
  courses: Array<{
    name: string;
    description: string;
    duration: string;
    level: string;
    price: string;
    originalPrice: string;
    savings: string;
    features: string[];
    highlights: string[];
  }>;
  contact: {
    formFields: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
      placeholder: string;
      options?: string[];
    }>;
    benefits: string[];
  };
  seo: {
    keywords: string[];
    author: string;
    robots: string;
    language: string;
  };
}

export const siteConfig: SiteConfig = {
  site: {
    name: "DAxGENAI",
    title: "Master Data Analytics with Generative AI",
    description: "Transform your career with personalized 1-on-1 training in Excel, Power BI, SQL, Python, and AI-powered analytics. Join 3000+ successful professionals who've secured data roles.",
    url: "https://daxgenai.com",
    email: "daxgenai@gmail.com",
    phone: "+91 8374316403",
    location: "Remote Training Available Worldwide"
  },
  social: {
    linkedin: "https://linkedin.com/company/daxgenai",
    twitter: "https://twitter.com/daxgenai",
    facebook: "https://facebook.com/daxgenai",
    youtube: "https://youtube.com/@daxgenai"
  },
  hero: {
    title: "Master Data Analytics with Generative AI",
    subtitle: "Transform your career with personalized training",
    description: "Transform your career with personalized 1-on-1 training in Excel, Power BI, SQL, Python, and AI-powered analytics. Join 3000+ successful professionals who've secured data roles.",
    ctaPrimary: "Start Your Journey",
    ctaSecondary: "Learn More",
    stats: [
      { value: "5+", label: "Years Experience", icon: "calendar" },
      { value: "3000+", label: "Students Trained", icon: "users" },
      { value: "98%", label: "Satisfaction Rate", icon: "star" }
    ]
  },
  tools: [
    {
      name: "Microsoft Excel",
      category: "Spreadsheet",
      difficulty: "Beginner",
      marketDemand: "Very High",
      features: ["Data Analysis", "Pivot Tables", "Charts", "Formulas", "VBA Development"],
      gradient: "from-red-500 to-red-700",
      description: "Master the world's most popular spreadsheet application for data analysis and business intelligence."
    },
    {
      name: "Microsoft Power BI",
      category: "Business Intelligence",
      difficulty: "Intermediate",
      marketDemand: "High",
      features: ["Data Modeling", "DAX", "Visualizations", "Reports", "Dashboards"],
      gradient: "from-red-600 to-red-800",
      description: "Create powerful business intelligence solutions with interactive dashboards and reports."
    },
    {
      name: "SQL & Database",
      category: "Database",
      difficulty: "Intermediate",
      marketDemand: "Very High",
      features: ["Query Writing", "Data Manipulation", "Joins", "Aggregations", "Optimization"],
      gradient: "from-black to-red-700",
      description: "Learn to extract, transform, and analyze data from relational databases efficiently."
    },
    {
      name: "Python",
      category: "Programming",
      difficulty: "Advanced",
      marketDemand: "Very High",
      features: ["Pandas", "NumPy", "Matplotlib", "Machine Learning", "AI Integration"],
      gradient: "from-red-700 to-red-900",
      description: "Master Python for data science, machine learning, and artificial intelligence applications."
    },
    {
      name: "Statistics & Analytics",
      category: "Analysis",
      difficulty: "Intermediate",
      marketDemand: "High",
      features: ["Statistical Testing", "Hypothesis Testing", "Regression Analysis", "Data Interpretation"],
      gradient: "from-black to-red-800",
      description: "Apply statistical methods to make data-driven decisions and validate business insights."
    }
  ],
  achievements: [
    {
      icon: "award",
      title: "Certified Data Professional",
      description: "Microsoft Certified Power BI Data Analyst & SQL Server Expert"
    },
    {
      icon: "book-open",
      title: "Industry Experience",
      description: "5+ years in Fortune 500 companies across multiple sectors"
    },
    {
      icon: "users",
      title: "Teaching Excellence",
      description: "Personalized 1-on-1 training with 95% course completion rate"
    },
    {
      icon: "trending-up",
      title: "Proven Results",
      description: "80% of students secure data roles within 6 months"
    }
  ],
  expertise: [
    "Advanced Excel & VBA Development",
    "Power BI Dashboard Architecture",
    "SQL Database Design & Optimization",
    "Python Data Science & Machine Learning",
    "Statistical Analysis & Hypothesis Testing",
    "Business Intelligence Strategy",
    "Data Visualization Best Practices",
    "Generative AI Integration"
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Data Analyst",
      company: "TechCorp Inc.",
      course: "Excel Mastery Program",
      content: "The personalized training approach completely transformed my Excel skills. I went from basic formulas to creating complex dashboards in just 6 weeks. Now I'm leading data analysis projects at my company!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Intelligence Developer",
      company: "Global Solutions Ltd.",
      course: "Power BI Expert Track",
      content: "The Power BI course was incredibly comprehensive. The instructor's real-world experience made all the difference. I learned not just the technical skills, but also how to think strategically about data visualization.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Innovation Labs",
      course: "Python for Data Science",
      content: "Coming from a non-technical background, I was worried about learning Python. But the step-by-step approach and real project work made it accessible and engaging. I'm now building ML models!",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Senior Analyst",
      company: "Fortune 500 Company",
      course: "Complete Analytics Program",
      content: "The comprehensive program covered everything I needed to advance my career. The SQL optimization techniques alone saved our team hours of work every week. Highly recommended!",
      rating: 5
    }
  ],
  courses: [
    {
      name: "Complete Data Analytics with Generative AI",
      description: "Master the complete data analytics stack from Excel to Python, including AI-powered analytics and machine learning",
      duration: "16-20 weeks",
      level: "Beginner to Advanced",
      price: "₹34,999",
      originalPrice: "₹61,000",
      savings: "₹26,001",
      features: [
        "All 4 individual programs combined",
        "AI & Machine Learning integration",
        "Generative AI for data analysis",
        "Advanced analytics techniques",
        "Portfolio development",
        "Career placement support"
      ],
      highlights: [
        "Most comprehensive program",
        "AI-powered learning tools",
        "Industry certification",
        "Lifetime access to all materials"
      ]
    },
    {
      name: "Advanced Excel Mastery Program",
      description: "Comprehensive Excel training from basics to advanced VBA development",
      duration: "6-8 weeks",
      level: "Beginner to Advanced",
      price: "₹10,000",
      features: ["Live 1-on-1 sessions", "Real project work", "VBA automation", "Advanced formulas", "Dashboard creation"],
      highlights: ["95% completion rate", "Immediate practical application", "Lifetime access to materials"]
    },
    {
      name: "Microsoft Power BI Mastery Program",
      description: "Master Power BI for data visualization and business intelligence",
      duration: "6-8 weeks",
      level: "Beginner to Advanced",
      price: "₹15,000",
      features: ["Data modeling", "DAX formulas", "Visualization design", "Report publishing", "Power BI Service"],
      highlights: ["Industry-standard tool", "Real-world projects", "Certification prep"]
    },
    {
      name: "SQL & Database Mastery Program",
      description: "Learn database design, optimization, and advanced querying techniques",
      duration: "6-8 weeks",
      level: "Beginner to Advanced",
      price: "₹18,000",
      features: ["Query optimization", "Database design", "Advanced joins", "Stored procedures", "Performance tuning"],
      highlights: ["Database fundamentals", "Real database projects", "Career-ready skills"]
    },
    {
      name: "Python for Data Analytics Program",
      description: "Master Python programming for data analysis and visualization",
      duration: "8-10 weeks",
      level: "Beginner to Advanced",
      price: "₹18,000",
      features: ["Python basics", "Pandas & NumPy", "Data visualization", "Statistical analysis", "Machine learning intro"],
      highlights: ["Most in-demand skill", "Industry projects", "Portfolio development"]
    }
  ],
  contact: {
    formFields: [
      { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Enter your full name" },
      { name: "email", label: "Email Address", type: "email", required: true, placeholder: "Enter your email address" },
      { name: "phone", label: "Phone Number", type: "tel", required: false, placeholder: "Enter your phone number" },
      { name: "experience", label: "Experience Level", type: "select", required: true, placeholder: "Select your experience level", options: ["Complete Beginner", "Some Experience", "Intermediate", "Advanced", "Professional"] },
      { name: "goals", label: "Learning Goals", type: "textarea", required: true, placeholder: "What do you want to achieve with data analytics?" },
      { name: "preferredTime", label: "Preferred Consultation Time", type: "select", required: true, placeholder: "Select your preferred time", options: ["Weekday Mornings", "Weekday Afternoons", "Weekday Evenings", "Weekends", "Flexible"] }
    ],
    benefits: [
      "Free 30-minute consultation",
      "Personalized learning assessment",
      "Custom training roadmap",
      "Industry insights and trends",
      "Career guidance and advice"
    ]
  },
  seo: {
    keywords: [
      "data analytics training",
      "Excel training",
      "Power BI training",
      "SQL training",
      "Python data science",
      "machine learning",
      "business intelligence",
      "data visualization",
      "AI training",
      "career development",
      "data analyst certification",
      "online data courses"
    ],
    author: "DAxGENAI",
    robots: "index, follow",
    language: "English"
  }
};

export default siteConfig;
