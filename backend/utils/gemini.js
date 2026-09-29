import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function analyzeSentiment(feedbackMessage) {
  try {
    const prompt = `Analyze the following customer feedback and return a JSON object with exactly these fields:
- "sentiment": one of "positive", "neutral", or "negative"
- "themes": an array of 1-3 key themes (short phrases)
- "suggestedResponse": a professional, empathetic response to the customer (2-3 sentences)

Return ONLY the JSON object, no markdown formatting, no code blocks.

Customer feedback: "${feedbackMessage}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents: prompt,
    });

    const text = response.text;
    const parsed = JSON.parse(text);

    const allowedSentiments = ['positive', 'neutral', 'negative'];
    const isValid =
      allowedSentiments.includes(parsed.sentiment) &&
      Array.isArray(parsed.themes) &&
      parsed.themes.length >= 1 &&
      parsed.themes.length <= 3 &&
      parsed.themes.every(
        theme => typeof theme === 'string' && theme.trim() !== ''
      ) &&
      typeof parsed.suggestedResponse === 'string' &&
      parsed.suggestedResponse.trim() !== '';

    if (!isValid) {
      return null;
    }

    return {
      sentiment: parsed.sentiment,
      themes: parsed.themes,
      suggestedResponse: parsed.suggestedResponse,
    };

  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    return null;
  }
}
