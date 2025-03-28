
import { Article } from "../types/article";

export const articles: Article[] = [
  {
    id: "1",
    title: "Scientists Discover New Species in Amazon Rainforest",
    description: "Researchers have identified a previously unknown type of frog with remarkable camouflage abilities.",
    category: "Science",
    date: "2023-09-15",
    imageUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef",
    source: "Nature Today",
    url: "#"
  },
  {
    id: "2",
    title: "Global Tech Conference Announces Breakthrough in Quantum Computing",
    description: "Major tech companies reveal new quantum processor capable of solving complex problems in seconds.",
    category: "Technology",
    date: "2023-09-14",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    source: "Tech Insider",
    url: "#"
  },
  {
    id: "3",
    title: "Financial Markets React to New Economic Policies",
    description: "Wall Street shows positive growth as new fiscal measures are implemented worldwide.",
    category: "Business",
    date: "2023-09-13",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    source: "Financial Times",
    url: "#"
  },
  {
    id: "4",
    title: "Renowned Artist Opens Immersive Exhibition",
    description: "The groundbreaking installation combines virtual reality with traditional art forms.",
    category: "Arts",
    date: "2023-09-12",
    imageUrl: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07",
    source: "Arts Weekly",
    url: "#"
  },
  {
    id: "5",
    title: "New Study Reveals Benefits of Mediterranean Diet",
    description: "Research confirms significant health improvements for participants following the traditional eating pattern.",
    category: "Health",
    date: "2023-09-11",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    source: "Health Report",
    url: "#"
  },
  {
    id: "6",
    title: "Championship Match Ends with Surprising Upset",
    description: "Underdog team defeats reigning champions in dramatic final quarter comeback.",
    category: "Sports",
    date: "2023-09-10",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    source: "Sports Network",
    url: "#"
  },
  {
    id: "7",
    title: "Historic Peace Agreement Signed Between Rival Nations",
    description: "After decades of tension, leaders come together to establish new diplomatic relations.",
    category: "World",
    date: "2023-09-09",
    imageUrl: "https://images.unsplash.com/photo-1519692933481-e162a57d6721",
    source: "World News",
    url: "#"
  },
  {
    id: "8",
    title: "New Legislation Aims to Reduce Carbon Emissions",
    description: "Lawmakers propose ambitious targets for clean energy transition over the next decade.",
    category: "Environment",
    date: "2023-09-08",
    imageUrl: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
    source: "Environmental Monitor",
    url: "#"
  },
  {
    id: "9",
    title: "Innovative Startup Receives Record Funding",
    description: "The company's sustainable packaging solution attracts major investors in latest funding round.",
    category: "Business",
    date: "2023-09-07",
    imageUrl: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
    source: "Business Daily",
    url: "#"
  },
  {
    id: "10",
    title: "Cultural Festival Celebrates Diversity with Record Attendance",
    description: "The annual event showcases traditions from over 50 countries, drawing international visitors.",
    category: "Culture",
    date: "2023-09-06",
    imageUrl: "https://images.unsplash.com/photo-1528995320822-93c449ab3d7e",
    source: "Cultural Chronicle",
    url: "#"
  },
  {
    id: "11",
    title: "Advancements in AI Technology Show Promise for Healthcare",
    description: "New algorithms demonstrate unprecedented accuracy in early disease detection.",
    category: "Science",
    date: "2023-09-05",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557",
    source: "Science Journal",
    url: "#"
  },
  {
    id: "12",
    title: "Remote Work Trend Continues to Reshape Urban Development",
    description: "Cities adapt to changing workplace patterns with new community-focused infrastructure.",
    category: "Lifestyle",
    date: "2023-09-04",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    source: "Urban Living",
    url: "#"
  }
];

export const categories = Array.from(new Set(articles.map(article => article.category))).sort();
