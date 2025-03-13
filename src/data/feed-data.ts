
import { Post } from '../types/feed';

export const mockedPosts: Post[] = [
  {
    id: "1",
    author: {
      id: "user1",
      name: "Sophia Rodriguez",
      role: "CEO & Founder",
      company: "EcoTech Solutions",
      avatar: "https://i.pravatar.cc/150?img=1",
      isVerified: true,
    },
    content: "Excited to announce that EcoTech Solutions has been selected for the Women Entrepreneurs Growth Program! Looking forward to scaling our impact in sustainable technology. #WomenInTech #Entrepreneurship #Sustainability",
    type: "text",
    timestamp: "2 hours ago",
    likes: 127,
    comments: [
      {
        id: "c1",
        author: {
          id: "user5",
          name: "Amina Patel",
          role: "Sustainability Consultant",
          avatar: "https://i.pravatar.cc/150?img=5",
        },
        content: "Congratulations, Sophia! Well-deserved recognition for your incredible work.",
        timestamp: "1 hour ago",
        likes: 12,
      },
      {
        id: "c2",
        author: {
          id: "user10",
          name: "Jasmine Wong",
          role: "Investment Analyst",
          company: "Green Ventures",
          avatar: "https://i.pravatar.cc/150?img=10",
        },
        content: "This is fantastic news! Would love to connect and discuss potential partnerships.",
        timestamp: "45 minutes ago",
        likes: 5,
      }
    ],
    shares: 34,
    hashtags: ["WomenInTech", "Entrepreneurship", "Sustainability", "GrowthProgram"],
    visibility: "public",
    isFeatured: true,
  },
  {
    id: "2",
    author: {
      id: "user2",
      name: "Global Women's Tech Network",
      role: "Organization",
      avatar: "https://i.pravatar.cc/150?img=20",
      isVerified: true,
    },
    content: "📣 Applications are now open for our annual Tech Leadership Accelerator program! Join a cohort of exceptional women leaders for a 6-month journey of growth, mentorship, and networking.",
    type: "event",
    timestamp: "3 hours ago",
    likes: 89,
    comments: [],
    shares: 56,
    media: [
      {
        type: "image",
        url: "https://i.pravatar.cc/800?img=8",
        alt: "Women tech leadership program",
      }
    ],
    link: "https://example.com/tech-leadership-program",
    linkPreview: {
      title: "Tech Leadership Accelerator",
      description: "Applications open until June 30th. Program starts September 2023.",
      image: "https://i.pravatar.cc/800?img=8",
      url: "https://example.com/tech-leadership-program",
    },
    hashtags: ["TechLeadership", "WomenInTech", "Mentorship", "CareerGrowth"],
    visibility: "public",
    isPromoted: true,
  },
  {
    id: "3",
    author: {
      id: "user3",
      name: "Elena Kim",
      role: "Senior Software Engineer",
      company: "TechCorp",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    content: "I'm hosting a workshop on 'Negotiating Your Tech Salary' this Friday at 5PM EST. We'll cover research strategies, conversation tactics, and practice scenarios. Who's joining me? Drop a comment to receive the Zoom link!",
    type: "event",
    timestamp: "5 hours ago",
    likes: 76,
    comments: [
      {
        id: "c3",
        author: {
          id: "user7",
          name: "Taylor Morgan",
          role: "Product Manager",
          avatar: "https://i.pravatar.cc/150?img=7",
        },
        content: "Count me in! This is exactly what I need right now.",
        timestamp: "4 hours ago",
        likes: 3,
      }
    ],
    shares: 23,
    hashtags: ["SalaryNegotiation", "CareerAdvice", "TechCareers", "Workshop"],
    visibility: "public",
  },
  {
    id: "4",
    author: {
      id: "user4",
      name: "Innovate Finance",
      role: "Company",
      avatar: "https://i.pravatar.cc/150?img=30",
      isVerified: true,
    },
    content: "We're looking for a Senior UX Designer to join our product team in San Francisco. Remote candidates in PST timezone will also be considered.",
    type: "job",
    timestamp: "1 day ago",
    likes: 42,
    comments: [],
    shares: 19,
    link: "https://example.com/ux-designer-job",
    linkPreview: {
      title: "Senior UX Designer",
      description: "5+ years experience, fintech background preferred. Competitive salary and benefits.",
      image: "https://i.pravatar.cc/800?img=30",
      url: "https://example.com/ux-designer-job",
    },
    hashtags: ["JobOpening", "UXDesign", "Fintech", "Hiring"],
    visibility: "public",
    isPromoted: true,
  },
  {
    id: "5",
    author: {
      id: "user5",
      name: "Michelle Thompson",
      role: "Startup Advisor",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    content: "What's your biggest challenge as a woman founder or leader in tech right now?",
    type: "poll",
    timestamp: "2 days ago",
    likes: 105,
    comments: [
      {
        id: "c4",
        author: {
          id: "user12",
          name: "Rebecca Lee",
          role: "Founder",
          company: "HealthTech Solutions",
          avatar: "https://i.pravatar.cc/150?img=12",
        },
        content: "For me, it's finding investors who understand the market I'm addressing. So many VCs still don't get women's health tech.",
        timestamp: "1 day ago",
        likes: 28,
      }
    ],
    shares: 31,
    poll: {
      question: "Biggest challenge as a woman in tech?",
      options: [
        { id: "p1", text: "Funding access", votes: 156 },
        { id: "p2", text: "Building the right network", votes: 98 },
        { id: "p3", text: "Work-life balance", votes: 142 },
        { id: "p4", text: "Being taken seriously", votes: 187 }
      ],
      totalVotes: 583,
      endDate: "2023-06-15T00:00:00Z"
    },
    hashtags: ["WomenInTech", "TechLeadership", "StartupLife"],
    visibility: "public",
    isFeatured: true,
  }
];
