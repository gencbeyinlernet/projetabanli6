// Shape of the trainer script. The content itself ships only encrypted (script.enc.json).
export interface TrainerBlock { label: string; text: string; code?: boolean }

export interface TrainerStep {
  id: string;
  title: string;
  minutes: number;
  app: string;
  why: string;
  say: string[];
  do?: string[];
  blocks?: TrainerBlock[];
  transition?: string;
  check?: string;
  fallback?: string[];
}

export interface TrainerSegment {
  id: string;
  time: string;
  title: string;
  minutes: number;
  closing?: string;
  steps: TrainerStep[];
}

export interface TrainerScript {
  title: string;
  date: string;
  goal: string;
  memorable: string[];
  prep: { title: string; items: string[] }[];
  segments: TrainerSegment[];
  phrases: { title: string; lines: string[] }[];
  faq: { q: string; a: string }[];
}

export interface EncryptedPayload {
  v: number;
  kdf: string;
  iterations: number;
  salt: string;
  iv: string;
  data: string;
}
