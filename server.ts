import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { curriculumContext } from "./src/data/curriculum";

dotenv.config();

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    const api_key = process.env.GEMINI_API_KEY;
    if (!api_key || api_key === "BURAYA_GEMINI_API_KEYINIZI_YAZIN" || api_key === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY tanımlanmamış veya varsayılan değerde kalmış. Lütfen sunucunuzdaki veya lokalinizdeki .env dosyasına kendi Gemini API anahtarınızı (AIzaSy...) yazın.");
    }
    aiInstance = new GoogleGenAI({
      apiKey: api_key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiInstance;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Mesaj boş olamaz." });
      }

      const api_key = process.env.GEMINI_API_KEY;
      if (!api_key || api_key === "BURAYA_GEMINI_API_KEYINIZI_YAZIN" || api_key === "MY_GEMINI_API_KEY") {
        return res.status(550).json({ 
          error: "Gemini API anahtarı (GEMINI_API_KEY) tanımlanmamış. Lütfen sunucu dizinindeki .env dosyasına kendi Gemini API anahtarınızı (AIzaSy...) ekleyin." 
        });
      }

      const contents = [];
      
      // Convert history format if any
      if (history && Array.isArray(history)) {
        for (const h of history) {
          contents.push({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }]
          });
        }
      }

      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      let response;
      const modelsToTry = ["gemini-3.5-flash", "gemini-3.1-flash-lite"];
      let lastError: any = null;

      for (const modelName of modelsToTry) {
        let attempts = 2;
        let delay = 1000;
        let success = false;

        while (attempts > 0 && !success) {
          try {
            console.log(`AI Chat: Requesting content from ${modelName} (Attempts remaining: ${attempts})`);
            const aiClient = getAI();
            response = await aiClient.models.generateContent({
              model: modelName,
              contents: contents,
              config: {
                systemInstruction: `Sen aşağıdaki programda adı verilen GencbeyinlerNet eğitiminin yardımcısısın. Codex ve Claude ekosistemlerini birlikte anlattığımızı belirt.
Yalnızca aşağıdaki güncel program ve araç bilgilerini temel al. Yanıtlarını sade Türkçe ile, "yapacağız" ve "kullanacağız" diliyle ver.
Tarih, süre, katılım ve eğitmen bilgilerini aşağıdaki programdan kullan. Günlük başlangıç saatleri, toplantı platformu ve ücret paylaşılmadı; bunları uydurma. Başvuru ve iletişim için programdaki WhatsApp ve e-posta seçeneklerini öner.
Araçların ücretsiz veya sınırsız olduğunu iddia etme; koşulların araç sağlayıcısından kontrol edileceğini belirt. Son kararın öğretmende olduğunu vurgula.
Gemini CLI kurulum komutu: npm install -g @google/gemini-cli. API anahtarları yalnızca sunucuda tutulmalı, tarayıcıya veya GitHub'a eklenmemeli.
GitHub Pages statik içerik barındırır; bu projenin /api/chat özelliği ayrıca sunucu çalışma ortamı gerektirir.
PROGRAM:
${curriculumContext}`
              }
            });
            success = true;
          } catch (err: any) {
            lastError = err;
            console.error(`Error with model ${modelName}:`, err?.message || err);
            
            // Check if transient error
            const isTransient = err?.message?.includes("503") || 
                                err?.message?.includes("experiencing high demand") || 
                                err?.message?.includes("UNAVAILABLE") ||
                                err?.message?.includes("Resource") ||
                                err?.message?.includes("429");
            
            if (isTransient && attempts > 1) {
              attempts--;
              await new Promise((resolve) => setTimeout(resolve, delay));
              delay *= 1.5;
            } else {
              break; // Try next model from modelsToTry list
            }
          }
        }

        if (success && response) {
          break;
        }
      }

      if (!response) {
        throw lastError || new Error("Şu anda tüm yapay zeka sunucuları yüksek talep nedeniyle yanıt vermiyor. Lütfen birkaç saniye sonra tekrar deneyin.");
      }

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API hatası:", error);
      res.status(500).json({ error: error?.message || "Bir iç hata oluştu." });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
