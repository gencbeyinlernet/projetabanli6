export interface EduTool {
  id: string;
  name: string;
  description: string;
  url: string;
}

export const eduTools: EduTool[] = [
  {
    id: 'notebooklm',
    name: 'Google NotebookLM',
    description: 'Belgelerinizden yapay zekâ destekli özetler, analizler ve podcastler oluşturur.',
    url: 'https://notebooklm.google.com'
  },
  {
    id: 'gamma',
    name: 'Gamma App',
    description: 'Yapay zekâ ile sunum, doküman ve web sayfası hazırlama aracı.',
    url: 'https://gamma.app'
  },
  {
    id: 'overleaf',
    name: 'Overleaf',
    description: 'Akademik makale ve tez yazımı için çevrimiçi LaTeX editörü.',
    url: 'https://www.overleaf.com'
  },
  {
    id: 'storm',
    name: 'STORM',
    description: 'Araştırma yapıp kaynaklara dayalı kapsamlı raporlar oluşturan yapay zekâ aracı.',
    url: 'https://storm.genie.stanford.edu'
  },
  {
    id: 'napkin',
    name: 'Napkin AI',
    description: 'Metinleri otomatik olarak diyagram ve görsellere dönüştürür.',
    url: 'https://napkin.ai'
  },
  {
    id: 'mendeley',
    name: 'Mendeley',
    description: 'Kaynakça yönetimi, makale arşivleme ve atıf oluşturma aracı.',
    url: 'https://www.mendeley.com'
  },
  {
    id: 'conker',
    name: 'Conker AI',
    description: 'Öğretmenler için yapay zekâ destekli quiz ve değerlendirme oluşturma platformu.',
    url: 'https://www.conker.ai'
  }
];
