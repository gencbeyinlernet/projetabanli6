export interface Topic {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  icon: string; // lucide-react icon name
  content: {
    overview: string;
    keyPoints: string[];
    tipsOrCode?: string;
    codeLanguage?: string;
    interactiveSnippet?: boolean;
    links?: { title: string; description: string; url: string }[];
  };
}

export interface Session {
  id: number;
  title: string;
  hours: string;
  subtitle: string;
  description: string;
  bgGradient: string;
  accentColor: string;
}
