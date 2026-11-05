import { useEffect, useState } from "react"
import { columns } from "./columns"
import { loadFeedback, type Feedback } from "./feedback"
import { FeedbackTable } from "./feedback-table"

export default function FeedbackPage() {
  const [data, setData] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const feedback = await loadFeedback({ signal: controller.signal })
        if (!controller.signal.aborted) setData(feedback)
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Feedback loading failed:", error)
          setError("Could not load feedback")
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void load()
    return () => controller.abort()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="container mx-auto py-10">
      <FeedbackTable columns={columns} data={data} />
    </div>
  )
}
