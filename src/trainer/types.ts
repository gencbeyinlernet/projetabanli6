// Shape of the trainer step list. The content itself ships only encrypted (script.enc.json).
export interface TrainerPrompt { label: string; text: string; code?: boolean }

export interface TrainerStep {
  title: string;
  minutes: number;
  what: string;
  say: string[];
  do?: string[];
  prompts?: TrainerPrompt[];
  check?: string;
}

export interface TrainerSection {
  title: string;
  time: string;
  minutes: number;
  goal: string;
  steps: TrainerStep[];
}

export interface TrainerScript {
  title: string;
  subtitle: string;
  before: string[];
  sections: TrainerSection[];
}

export interface EncryptedPayload {
  v: number;
  kdf: string;
  iterations: number;
  salt: string;
  iv: string;
  data: string;
}
