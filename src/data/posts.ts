import { Post, Category } from '../types';

export const allPosts: Post[] = [
  // Sports
  { id: 1, title: "Olympic Records Broken", description: "Three new world records set in swimming competitions this week.", category: "Sports" },
  { id: 2, title: "Basketball Championship Finals", description: "Exciting finale with last-minute three-pointer deciding the winner.", category: "Sports" },
  { id: 3, title: "Tennis Player's Comeback", description: "Former world #1 returns to competition after two-year injury break.", category: "Sports" },
  { id: 4, title: "Football Transfer News", description: "Major league signs international star for record-breaking fee.", category: "Sports" },
  { id: 5, title: "Marathon World Record", description: "Runner breaks 20-year-old marathon record by 30 seconds.", category: "Sports" },
  { id: 6, title: "Golf Tournament Upset", description: "Unknown amateur defeats seasoned professionals in major tournament.", category: "Sports" },
  { id: 7, title: "Soccer World Cup Qualifiers", description: "Surprising upsets in qualification rounds shake tournament predictions.", category: "Sports" },
  { id: 8, title: "Winter Olympics Preparation", description: "Athletes train in extreme conditions for upcoming winter games.", category: "Sports" },

  // Technology
  { id: 9, title: "AI Breakthrough in Medicine", description: "New algorithm can detect diseases 95% faster than traditional methods.", category: "Technology" },
  { id: 10, title: "Smartphone Innovation", description: "Latest device features revolutionary battery lasting one week.", category: "Technology" },
  { id: 11, title: "Space Technology Advance", description: "Private company successfully tests reusable rocket system.", category: "Technology" },
  { id: 12, title: "Quantum Computing Milestone", description: "Scientists achieve quantum supremacy in complex calculations.", category: "Technology" },
  { id: 13, title: "Electric Car Range Record", description: "New electric vehicle travels 1000 miles on single charge.", category: "Technology" },
  { id: 14, title: "Social Media Platform Launch", description: "New platform promises better privacy and user control.", category: "Technology" },
  { id: 15, title: "Robotic Surgery Success", description: "Robot performs complex heart surgery with 100% precision.", category: "Technology" },
  { id: 16, title: "Virtual Reality Gaming", description: "New VR system offers completely immersive gaming experience.", category: "Technology" },

  // Politics
  { id: 17, title: "Climate Policy Agreement", description: "Nations unite on ambitious carbon reduction targets.", category: "Politics" },
  { id: 18, title: "Election Campaign Updates", description: "Candidates present their platforms in heated debates.", category: "Politics" },
  { id: 19, title: "International Trade Deal", description: "Major economies sign new trade agreement affecting millions.", category: "Politics" },
  { id: 20, title: "Healthcare Reform Proposal", description: "New bill aims to reduce medical costs for middle-class families.", category: "Politics" },
  { id: 21, title: "Education Funding Increase", description: "Government allocates additional billion for public schools.", category: "Politics" },
  { id: 22, title: "Immigration Policy Changes", description: "New regulations affect visa applications and residency.", category: "Politics" },
  { id: 23, title: "Tax Reform Discussion", description: "Lawmakers debate changes to corporate and individual tax rates.", category: "Politics" },
  { id: 24, title: "Infrastructure Investment", description: "Massive spending plan targets roads, bridges, and broadband.", category: "Politics" },

  // Environment
  { id: 25, title: "Coral Reef Recovery", description: "Scientists discover methods to restore dying coral ecosystems.", category: "Environment" },
  { id: 26, title: "Renewable Energy Record", description: "Solar and wind power account for 60% of new electricity generation.", category: "Environment" },
  { id: 27, title: "Wildlife Conservation Success", description: "Endangered species population increases by 40% this year.", category: "Environment" },
  { id: 28, title: "Ocean Cleanup Progress", description: "New technology removes 100 tons of plastic from Pacific Ocean.", category: "Environment" },
  { id: 29, title: "Forest Restoration Project", description: "Community plants million trees to combat deforestation.", category: "Environment" },
  { id: 30, title: "Climate Change Study", description: "Research reveals faster ice melting than previously predicted.", category: "Environment" },
  { id: 31, title: "Sustainable Agriculture", description: "Farmers adopt techniques reducing water usage by 50%.", category: "Environment" },
  { id: 32, title: "Green Building Initiative", description: "Cities mandate eco-friendly construction for new buildings.", category: "Environment" },

  // Entertainment
  { id: 33, title: "Movie Box Office Success", description: "Independent film becomes surprise hit, earning $200 million.", category: "Entertainment" },
  { id: 34, title: "Music Festival Lineup", description: "Major festival announces headliners for summer season.", category: "Entertainment" },
  { id: 35, title: "TV Series Finale", description: "Popular drama series concludes after eight successful seasons.", category: "Entertainment" },
  { id: 36, title: "Celebrity Charity Event", description: "Stars raise $50 million for disaster relief at gala dinner.", category: "Entertainment" },
  { id: 37, title: "Theater Broadway Opening", description: "New musical receives standing ovations on opening night.", category: "Entertainment" },
  { id: 38, title: "Streaming Platform Original", description: "New series breaks viewing records in first weekend.", category: "Entertainment" },
  { id: 39, title: "Award Show Highlights", description: "Unexpected wins and memorable speeches at annual ceremony.", category: "Entertainment" },
  { id: 40, title: "Concert Tour Announcement", description: "Legendary band announces farewell tour across 50 cities.", category: "Entertainment" },

  // Health
  { id: 41, title: "Cancer Treatment Breakthrough", description: "New therapy shows 90% success rate in clinical trials.", category: "Health" },
  { id: 42, title: "Mental Health Awareness", description: "Study reveals importance of workplace wellness programs.", category: "Health" },
  { id: 43, title: "Vaccine Development", description: "Scientists develop universal flu vaccine effective for decades.", category: "Health" },
  { id: 44, title: "Nutrition Research", description: "Mediterranean diet linked to 30% reduction in heart disease.", category: "Health" },
  { id: 45, title: "Exercise Benefits Study", description: "Daily 20-minute walks significantly improve cognitive function.", category: "Health" },
  { id: 46, title: "Sleep Quality Improvement", description: "New techniques help insomnia patients sleep better naturally.", category: "Health" },
  { id: 47, title: "Diabetes Management", description: "Continuous glucose monitors become more affordable and accurate.", category: "Health" },
  { id: 48, title: "Preventive Care Success", description: "Early screening programs reduce disease rates by 25%.", category: "Health" },
];

export const getCategoryColor = (category: Category): string => {
  const colors = {
    'Sports': 'bg-orange-500',
    'Technology': 'bg-blue-500', 
    'Politics': 'bg-red-500',
    'Environment': 'bg-green-500',
    'Entertainment': 'bg-purple-500',
    'Health': 'bg-pink-500'
  };
  return colors[category];
};

export const getCategoryLightColor = (category: Category): string => {
  const colors = {
    'Sports': 'bg-orange-100 text-orange-800',
    'Technology': 'bg-blue-100 text-blue-800', 
    'Politics': 'bg-red-100 text-red-800',
    'Environment': 'bg-green-100 text-green-800',
    'Entertainment': 'bg-purple-100 text-purple-800',
    'Health': 'bg-pink-100 text-pink-800'
  };
  return colors[category];
};