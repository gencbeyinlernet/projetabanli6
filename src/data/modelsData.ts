export interface AIModel {
  id: string;
  name: string;
  developer: string;
  description: string;
  strength: string;
  url: string;
  useCase: string;
}

export const popularModels: AIModel[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    developer: "OpenAI",
    description: "Dünyada en yaygın kullanılan yapay zekâ sohbet modeli.",
    strength: "Genel amaçlı kullanım, kodlama, içerik üretimi",
    url: "https://chatgpt.com",
    useCase: "Genel kullanım, eğitim, içerik üretimi"
  },
  {
    id: "gemini",
    name: "Gemini",
    developer: "Google",
    description: "Google'ın çok modlu yapay zekâ modeli.",
    strength: "Google servisleri entegrasyonu, uzun bağlam",
    url: "https://gemini.google.com",
    useCase: "Google entegrasyonu, uzun bağlam"
  },
  {
    id: "claude",
    name: "Claude",
    developer: "Anthropic",
    description: "Uzun doküman analizi ve yazı üretiminde güçlü.",
    strength: "Akademik çalışma, rapor, PDF analizi",
    url: "https://claude.ai",
    useCase: "Doküman ve PDF analizi"
  },
  {
    id: "grok",
    name: "Grok",
    developer: "xAI",
    description: "X (Twitter) verilerine erişebilen model.",
    strength: "Güncel olaylar, sosyal medya analizi",
    url: "https://grok.com",
    useCase: "Güncel olaylar ve sosyal medya verileri"
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    developer: "DeepSeek",
    description: "Çin merkezli güçlü ve düşük maliyetli model.",
    strength: "Kodlama ve mantıksal akıl yürütme",
    url: "https://www.deepseek.com",
    useCase: "Kodlama ve mantıksal problem çözme"
  },
  {
    id: "qwen",
    name: "Qwen",
    developer: "Alibaba",
    description: "Çok hızlı gelişen Çin merkezli model.",
    strength: "Kodlama, matematik ve çok dilli kullanım",
    url: "https://chat.qwen.ai",
    useCase: "Kodlama, matematik ve çoklu dil desteği"
  },
  {
    id: "mistral",
    name: "Mistral AI",
    developer: "Mistral AI",
    description: "Avrupa merkezli açık kaynak odaklı model ailesi.",
    strength: "Yerel kurulum ve özelleştirme",
    url: "https://mistral.ai",
    useCase: "Açık kaynak ve yerel kullanım"
  },
  {
    id: "llama",
    name: "Meta AI",
    developer: "Meta (Llama)",
    description: "Meta'nın açık kaynaklı Llama modelleri.",
    strength: "Yerel yapay zekâ projeleri",
    url: "https://www.meta.ai",
    useCase: "Açık kaynak yapay zekâ modelleri"
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    developer: "Perplexity AI",
    description: "Arama motoru destekli yapay zekâ.",
    strength: "Kaynak göstererek araştırma",
    url: "https://www.perplexity.ai",
    useCase: "Kaynak göstererek araştırma yapma"
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    developer: "Microsoft",
    description: "Microsoft ekosistemine entegre model.",
    strength: "Office, Excel, Word desteği",
    url: "https://copilot.microsoft.com",
    useCase: "Word, Excel ve Office entegrasyonu"
  }
];
