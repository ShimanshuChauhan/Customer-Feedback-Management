import { useEffect, useState } from "react"
import { columns, type Feedback } from "./columns"
import { FeedbackTable } from "./feedback-table"

export default function FeedbackPage() {
  const [data, setData] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function loadFeedback() {
      try {
        const apiUrl = (import.meta.env.VITE_API_URL ?? "").replace(/\/+$/, "")
        const response = await fetch(`${apiUrl}/api/feedback`)

        if (!response.ok) {
          throw new Error("Failed to fetch feedback")
        }

        const body = await response.json()
        setData(body.data.feedbackList)
      } catch {
        setError("Could not load feedback")
      } finally {
        setLoading(false)
      }
    }

    loadFeedback()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="container mx-auto py-10">
      <FeedbackTable columns={columns} data={data} />
    </div>
  )
}
