// Sample seed data for the application
// This data is used when Firebase is not configured yet

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  uploaderName: string;
  createdAt: Date;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  organizerName: string;
  createdAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  contributorName: string;
  createdAt: Date;
}

export interface Branch {
  id: string;
  name: string;
  description: string;
  videos: Video[];
  events: Event[];
  projects: Project[];
}

export interface College {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  branches: Branch[];
}

export const seedColleges: College[] = [
  {
    id: 'college-1',
    name: 'MIT Institute of Technology',
    description: 'Leading technical institute known for innovation and excellence in engineering education.',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop',
    branches: [
      {
        id: 'branch-1-1',
        name: 'Computer Science',
        description: 'Study of computation, algorithms, and software development',
        videos: [
          {
            id: 'video-1',
            title: 'Introduction to Data Structures',
            description: 'Learn the fundamentals of arrays, linked lists, stacks, and queues.',
            url: 'https://www.youtube.com/embed/RBSGKlAvoiM',
            uploaderName: 'Dr. Sarah Johnson',
            createdAt: new Date('2024-01-15'),
          },
          {
            id: 'video-2',
            title: 'Web Development Basics',
            description: 'Getting started with HTML, CSS, and JavaScript for beginners.',
            url: 'https://www.youtube.com/embed/qz0aGYrrlhU',
            uploaderName: 'Prof. Mike Chen',
            createdAt: new Date('2024-02-10'),
          },
        ],
        events: [
          {
            id: 'event-1',
            title: 'Hackathon 2024',
            date: '2024-03-15',
            description: '24-hour coding competition with exciting prizes and networking opportunities.',
            link: 'https://hackathon.example.com',
            organizerName: 'CS Club',
            createdAt: new Date('2024-01-20'),
          },
          {
            id: 'event-2',
            title: 'Tech Talk: AI in Healthcare',
            date: '2024-03-20',
            description: 'Guest lecture on applications of artificial intelligence in medical diagnosis.',
            organizerName: 'IEEE Student Chapter',
            createdAt: new Date('2024-02-01'),
          },
        ],
        projects: [
          {
            id: 'project-1',
            title: 'Smart Campus App',
            description: 'Mobile application for campus navigation and event notifications.',
            link: 'https://github.com/example/smart-campus',
            contributorName: 'Team Alpha',
            createdAt: new Date('2024-01-25'),
          },
        ],
      },
      {
        id: 'branch-1-2',
        name: 'Electrical Engineering',
        description: 'Study of electrical systems, electronics, and power engineering',
        videos: [
          {
            id: 'video-3',
            title: 'Circuit Analysis Fundamentals',
            description: 'Understanding basic circuit components and Kirchhoff\'s laws.',
            url: 'https://www.youtube.com/embed/F_vLWkkOETI',
            uploaderName: 'Dr. Emily Watson',
            createdAt: new Date('2024-01-18'),
          },
        ],
        events: [
          {
            id: 'event-3',
            title: 'Robotics Workshop',
            date: '2024-04-05',
            description: 'Hands-on workshop on building autonomous robots.',
            link: 'https://robotics.example.com',
            organizerName: 'Robotics Club',
            createdAt: new Date('2024-02-15'),
          },
        ],
        projects: [
          {
            id: 'project-2',
            title: 'Solar Power Monitor',
            description: 'IoT-based system to monitor and optimize solar panel efficiency.',
            link: 'https://github.com/example/solar-monitor',
            contributorName: 'Green Energy Team',
            createdAt: new Date('2024-02-05'),
          },
        ],
      },
      {
        id: 'branch-1-3',
        name: 'Mechanical Engineering',
        description: 'Study of mechanics, thermodynamics, and manufacturing',
        videos: [],
        events: [],
        projects: [],
      },
    ],
  },
  {
    id: 'college-2',
    name: 'Stanford Engineering College',
    description: 'Premier institution fostering innovation and entrepreneurship in technical education.',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop',
    branches: [
      {
        id: 'branch-2-1',
        name: 'Data Science',
        description: 'Study of data analysis, machine learning, and statistical modeling',
        videos: [
          {
            id: 'video-4',
            title: 'Python for Data Science',
            description: 'Complete introduction to Python programming for data analysis.',
            url: 'https://www.youtube.com/embed/rfscVS0vtbw',
            uploaderName: 'Prof. Alex Rivera',
            createdAt: new Date('2024-02-20'),
          },
        ],
        events: [
          {
            id: 'event-4',
            title: 'Data Science Bootcamp',
            date: '2024-04-10',
            description: 'Intensive 3-day bootcamp covering ML fundamentals.',
            organizerName: 'Analytics Club',
            createdAt: new Date('2024-03-01'),
          },
        ],
        projects: [
          {
            id: 'project-3',
            title: 'Sentiment Analyzer',
            description: 'NLP-based tool for analyzing social media sentiment.',
            link: 'https://github.com/example/sentiment-analyzer',
            contributorName: 'NLP Research Group',
            createdAt: new Date('2024-02-28'),
          },
        ],
      },
      {
        id: 'branch-2-2',
        name: 'Civil Engineering',
        description: 'Study of infrastructure, construction, and urban planning',
        videos: [],
        events: [],
        projects: [],
      },
    ],
  },
  {
    id: 'college-3',
    name: 'Berkeley Tech University',
    description: 'Research-focused university with strong industry partnerships and global recognition.',
    imageUrl: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=250&fit=crop',
    branches: [
      {
        id: 'branch-3-1',
        name: 'Artificial Intelligence',
        description: 'Study of intelligent systems, neural networks, and cognitive computing',
        videos: [
          {
            id: 'video-5',
            title: 'Deep Learning Fundamentals',
            description: 'Introduction to neural networks and deep learning concepts.',
            url: 'https://www.youtube.com/embed/aircAruvnKk',
            uploaderName: 'Dr. Lisa Park',
            createdAt: new Date('2024-01-30'),
          },
        ],
        events: [
          {
            id: 'event-5',
            title: 'AI Ethics Symposium',
            date: '2024-05-01',
            description: 'Discussion on ethical considerations in AI development.',
            link: 'https://ai-ethics.example.com',
            organizerName: 'AI Ethics Committee',
            createdAt: new Date('2024-03-10'),
          },
        ],
        projects: [],
      },
      {
        id: 'branch-3-2',
        name: 'Cybersecurity',
        description: 'Study of network security, cryptography, and ethical hacking',
        videos: [],
        events: [],
        projects: [
          {
            id: 'project-4',
            title: 'Secure Chat App',
            description: 'End-to-end encrypted messaging application.',
            link: 'https://github.com/example/secure-chat',
            contributorName: 'Security Research Team',
            createdAt: new Date('2024-03-05'),
          },
        ],
      },
    ],
  },
];
