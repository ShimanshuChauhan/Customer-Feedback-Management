import { columns, type Feedback } from "./columns"
import { FeedbackTable } from "./feedback-table"

function getData(): Feedback[] {
  // Sample feedback until the API is connected.
  return [
    {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    }, {
      name: "Alex Morgan",
      email: "m@example.com",
      message: "The product is easy to use and the support team was helpful.",
      rating: 5,
      sentiment: "positive",
      themes: ["Ease of use", "Customer support"],
      suggestedResponse: "Thank you for your feedback! We're glad you had a great experience.",
    },
  ]
}

export default function FeedbackPage() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <FeedbackTable columns={columns} data={data} />
    </div>
  )
}
