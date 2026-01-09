import GraphVisualizer from '../assets/images/projects/AlgorithmVisualizer.png';
import CelebrateLeetCode from '../assets/images/projects/CelebrateLeetcode.png';
import Huffman from '../assets/images/projects/HuffmanCoding.png';
import KMeanClustering from '../assets/images/projects/KMeanClustering.png';
import LookUp from '../assets/images/projects/LookUp.png';
import MazeGenerator from '../assets/images/projects/MazeGenerator.png';
import SudokuGame from '../assets/images/projects/SudokuGame.png';
import TypingMultiplayer from '../assets/images/projects/TypingMultiplayer.png';
import CrystalFramework from '../assets/images/projects/crystal-framework.png';
import InterviewExperience from '../assets/images/projects/interview-experience.png';
import SobelFilter from '../assets/images/projects/sobel_filter.png';
import WorkshopManager from '../assets/images/projects/workshop-manager.png';

export const projects = [
  {
    title: 'Audit Trial System',
    startDate: 'Nov 2025',
    endDate: 'Present',
    detail:
      'A secure Audit Logging System designed to track, record, and monitor all critical actions across an application. Ensures transparency, accountability, and easy activity review for users and admins.',
    techStack: [
       'FastAPI',
       'Python',
       'PostgreSQL',
       'Redis (Caching)',
       'Docker',
       'AWS (Deployment)',
       'JWT & OAuth',
       'REST APIs',
    ],
    image: InterviewExperience,
    codeURL: 'https://github.com/poojabelbase07/Audit-Trail-System-Backend',
    liveURL: '',
    infoURL: '',
  },
  {
    title: 'Tekmiz - Learning Platform',
    startDate: 'March 2025',
    endDate: 'June 2025',
    detail:
      'Tekmiz is a MERN stack based e-learning platform. This project helped me to gain deep understanding about file management and how to apply my API Knowledge.',
    techStack: ['React', 'NodeJS', 'Express','REST API', 'MongoDB'],
    image: CrystalFramework,
    codeURL: 'https://github.com/poojabelbase07/Tekmiz-E-learning-platform',
    liveURL: 'https://tekmiz-e-learning-platform.vercel.app',
    infoURL: '',
  },
  {
    title: 'Mentii - Mental Health Platform',
    startDate: 'Sep 2024',
    endDate: 'Jan 2025',
    detail:
      'Mentii is a web application focused on supporting mental well-being by helping users track moods, journal thoughts, and reflect on their emotional health.',
    techStack: ['ReactJs', 'Gemini API', 'Firebase'],
    image: WorkshopManager,
    codeURL: 'https://github.com/poojabelbase07/Mentii-Your-Mental-Health-Buddy',
    liveURL: 'https://mentii-your-mental-health-buddy-gilt.vercel.app',
    infoURL:
      '',
  }, 
  {
    title: 'Book Recommendation',
    startDate: 'Dec 2024',
    endDate: '',
    detail:
      'Discover next favorite book with personalized Book Recommendation! This project fetches data from the Google Books API to provide users with relevant and trending book suggestions based on their search preferences.',
    techStack: ['JavaScript', 'NodeJs', 'Express', 'SocketIo', 'HTML/CSS'],
    image: TypingMultiplayer,
    codeURL: 'https://github.com/poojabelbase07/Book-recommendation',
    liveURL: '',
    infoURL: '',
  }, 
  {
    title: 'Graph Visualizer',
    startDate: 'May 2022',
    endDate: '',
    detail:
      'It is a Graph Visualizer created in Java in which one can create custom graphs and visualize BFS, DFS, Dijkstra, Components, Spanning Tree, Bridges, and Articulation point.\nWe won First Prize in DSA Mini Project in Second Year with this Project.',
    techStack: ['JAVA', 'JavaFX', 'XML'],
    image: GraphVisualizer,
    codeURL: 'https://github.com/Suhaan-Bhandary/GraphVisualizer',
    liveURL: '',
    infoURL: '',
  },
  {
    title: 'Celebrate LeetCode',
    startDate: 'Dec 2022',
    endDate: '',
    detail: 'LeetCode still does doesn\'t provide a way to search through the leader board of a contest, so this extension provides a way to search players using their username!!. It also has a celebrate feature which plays a sound whenever your code get\'s accepted on LeetCode.',
    techStack: ['Chrome Extension', 'JavaScript', 'HTML', 'CSS'],
    image: CelebrateLeetCode,
    codeURL: 'https://github.com/Suhaan-Bhandary/Celebrate-LeetCode',
    liveURL: '',
    infoURL: '',
  }, 
  
  {
    title: 'Maze Generator',
    startDate: 'Jan 2021',
    endDate: '',
    detail:
      'A Maze-Generator using DFS Algorithm which can be used to generate mazes and also get the solution of the generated mazes.',
    techStack: ['React', 'react-icons'],
    image: MazeGenerator,
    codeURL: 'https://github.com/Suhaan-Bhandary/Maze-Generator-DFS',
    liveURL: 'https://suhaan-bhandary.github.io/Maze-Generator-DFS',
    infoURL: '',
  },
  {
    title: 'KMean on IPL Data',
    startDate: 'Aug 2022',
    endDate: '',
    detail:
      'A Mini Project using KMean Clustering Algorithm Implementation to Analyze and Create group based on IPL Data',
    techStack: ['Python', 'JupyterNotebook', 'Pandas', 'Matplotlib'],
    image: KMeanClustering,
    codeURL: 'https://github.com/Suhaan-Bhandary/KMean-Clusturing-Algorithm',
    liveURL: 'https://suhaan-bhandary.github.io/KMean-Clusturing-Algorithm',
    infoURL: '',
  },
  {
    title: 'Huffman Coding',
    startDate: 'March 2022',
    endDate: '',
    detail: 'A Text Encryption and Compression Project using Huffman Coding',
    techStack: ['React', 'react-icons', 'Heap'],
    image: Huffman,
    codeURL: 'https://github.com/Suhaan-Bhandary/Huffman-Coding',
    liveURL: 'https://suhaan-bhandary.github.io/Huffman-Coding',
    infoURL: '',
  },
];
