export type Sentiment = "positive" | "neutral" | "negative" | "unknown"

export type Feedback = {
  _id: string
  customerName: string
  email: string
  message: string
  rating?: number | null
  sentiment: Sentiment
  themes: string[]
  suggestedResponse?: string | null
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function isFeedback(value: unknown): value is Feedback {
  if (!isRecord(value)) return false

  return (
    typeof value._id === "string" &&
    typeof value.customerName === "string" &&
    typeof value.email === "string" &&
    typeof value.message === "string" &&
    (value.rating == null ||
      (typeof value.rating === "number" &&
        Number.isFinite(value.rating) && value.rating >= 1 && value.rating <= 5)) &&
    (value.sentiment === "positive" || value.sentiment === "neutral" ||
      value.sentiment === "negative" || value.sentiment === "unknown") &&
    Array.isArray(value.themes) &&
    value.themes.every((theme) => typeof theme === "string") &&
    (value.suggestedResponse == null || typeof value.suggestedResponse === "string")
  )
}

// Keep transport details and runtime checks out of the page and table.
export async function loadFeedback({
  baseUrl = import.meta.env?.VITE_API_URL ?? "",
  signal,
}: { baseUrl?: string; signal?: AbortSignal } = {}): Promise<Feedback[]> {
  const response = await fetch(`${baseUrl.replace(/\/+$/, "")}/api/feedback`, { signal })

  if (!response.ok) throw new Error("Failed to fetch feedback")

  const body: unknown = await response.json()
  if (!isRecord(body) || body.status !== "success" || !isRecord(body.data)) {
    throw new Error("Invalid feedback response")
  }

  const list: unknown = body.data.feedbackList
  if (!Array.isArray(list) || !list.every(isFeedback)) {
    throw new Error("Invalid feedback response")
  }

  return list
}
