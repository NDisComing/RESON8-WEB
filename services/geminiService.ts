import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateMinistryResponse = async (userMessage: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `You are a warm, empathetic, and spiritually grounded assistant for "Reson8", a Christian youth music ministry. 
        Your tone should be encouraging, youthful yet wise, and aligned with Christian values.
        Reson8's mission is to help people tune their "spiritual frequency" to resonate with God.
        
        If asked about the songs:
        - "Renewed Strength" (重新得力) is about finding power in God during hard times.
        - "Never Ceasing" (永不止息) is about God's eternal love (1 Corinthians 13).
        
        Keep answers concise (under 100 words) unless asked for a devotional.
        You can speak English or Chinese depending on the user's input.`,
      }
    });

    return response.text || "I'm contemplating that...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble finding the right words right now. Please try again later.";
  }
};