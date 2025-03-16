import hunter from '../assets/avatar/hunter.png'
import keeper from '../assets/avatar/resume.png'
import connector from '../assets/avatar/collector.png'
import solo from '../assets/avatar/solo.png'

export const characters = [
    {
      name: "Milestone Hunter",
      backstory: "Driven by a passion for excellence, the Milestone Hunter thrives on setting ambitious goals and achieving them. From academic accolades to professional triumphs, each milestone is a testament to dedication and hard work.",
      specialAbility: {
        name: "Trophy Case Vision",
        description: "The Milestone Hunter can instantly visualize the path to success, identifying key objectives and strategies to reach the finish line.",
      },
      imagePath: hunter,
    },
    {
      name: "Identity Keeper",
      backstory: "The Identity Keeper represents my core values and expertise. With a strong foundation in Artificial Intelligence, I'm driven by a passion for developing innovative solutions and a commitment to continuous learning.",
      specialAbility: {
        name: "Self-Awareness Shield",
        description: "The Identity Keeper possesses an unwavering understanding of personal strengths and weaknesses, allowing for continuous growth and adaptation.",
      },
      imagePath: keeper,
    },
    {
      name: "Solo Maverick",
      backstory: "The Solo Maverick explores the boundless potential of AI through independent projects. These ventures showcase a passion for pushing the boundaries of what's possible and a relentless commitment to innovation.",
      specialAbility: {
        name: "Innovation Engine",
        description: "The Solo Maverick can generate groundbreaking ideas and execute them with precision, transforming concepts into reality.",
      },
      imagePath: connector,
    },
    {
      name: "The Connector",
      backstory: "The Connector believes in the power of collaboration and open communication. Building bridges and fostering relationships is key to growth and innovation.",
      specialAbility: {
        name: "Network Weaver",
        description: "The Connector can effortlessly establish connections and facilitate meaningful interactions, creating a strong web of support and opportunity.",
      },
      imagePath: solo,
    },
  ];