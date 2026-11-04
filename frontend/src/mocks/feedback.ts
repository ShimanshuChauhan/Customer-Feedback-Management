import { http, HttpResponse } from "msw/http"
import { type Feedback } from "../feedbacks/feedback"

const feedbackList = [
  {
    _id: "6abb4b3ea0ee436dcdb1663a",
    customerName: "Shimanshu Chauhan",
    email: "shimanshu@example.com",
    message: "Lots of bugs when I try to book a membership.",
    rating: 2,
    sentiment: "negative",
    themes: ["booking process", "technical issues"],
    suggestedResponse: "We are sorry you are having trouble booking a membership. Please share the error message and your device details so our team can investigate.",
  },
  {
    _id: "6abb4b58a0ee436dcdb1663b",
    customerName: "Priya Sharma",
    email: "priya@example.com",
    message: "The app is easy to use, and I booked my first session in minutes.",
    rating: 5,
    sentiment: "positive",
    themes: ["usability", "booking process"],
    suggestedResponse: "Thank you for your feedback! We are happy that booking your first session was quick and easy.",
  },
  {
    _id: "6ade38fbab2fde1b2d466d9b",
    customerName: "Arjun Mehta",
    email: "arjun@example.com",
    message: "Everything works okay, but I would like more filtering options for classes.",
    rating: 3,
    sentiment: "neutral",
    themes: ["feature requests", "class discovery"],
    suggestedResponse: "Thank you for the suggestion. We would love to hear which class filters would be most useful to you.",
  },
  {
    _id: "6ade38fbab2fde1b2d466d9c",
    customerName: "Aisha Khan",
    email: "aisha@example.com",
    message: "My payment went through, but my membership is still showing as inactive.",
    rating: 1,
    sentiment: "negative",
    themes: ["payments", "membership activation"],
    suggestedResponse: "We are sorry your membership has not activated. Please contact support with your transaction reference so we can check the payment and help resolve this.",
  },
  {
    _id: "6ade38fbab2fde1b2d466d9d",
    customerName: "Rohan Patel",
    email: "rohan@example.com",
    message: "Support helped me reschedule a session quickly. Really appreciate the help!",
    rating: 5,
    sentiment: "positive",
    themes: ["customer support", "rescheduling"],
    suggestedResponse: "Thank you for the kind words! We are glad our support team could help you reschedule your session.",
  },
  {
    _id: "6ade38fbab2fde1b2d466d9e",
    customerName: "Neha Verma",
    email: "neha@example.com",
    message: "The reminders are useful, but I sometimes receive the same notification twice.",
    rating: 3,
    sentiment: "neutral",
    themes: ["notifications", "technical issues"],
    suggestedResponse: "Thank you for letting us know. Please share an example of the duplicate reminder and your app version so we can investigate.",
  },
  {
    _id: "6ade38fbab2fde1b2d466d9f",
    customerName: "Vikram Singh",
    email: "vikram@example.com",
    message: "The app takes too long to load my upcoming bookings on mobile data.",
    rating: 2,
    sentiment: "negative",
    themes: ["performance", "mobile experience"],
    suggestedResponse: "We are sorry your bookings are loading slowly. Please share your device model and app version so we can look into the performance issue.",
  },
  {
    _id: "6ade38fbab2fde1b2d466da0",
    customerName: "Ananya Rao",
    email: "ananya@example.com",
    message: "Love the variety of classes. Saving my favourite instructors would make it even better.",
    rating: 4,
    sentiment: "positive",
    themes: ["class variety", "feature requests"],
    suggestedResponse: "Thank you! We are glad you enjoy the classes, and we appreciate your suggestion to add favourite instructors.",
  },
  {
    _id: "6ade38fbab2fde1b2d466da1",
    customerName: "Meera Shah",
    email: "meera@example.com",
    message: "Please add more weekend sessions.",
    sentiment: "unknown",
    themes: [],
  },
] satisfies Feedback[]

export const feedbackHandlers = [
  http.get("/api/feedback", () => {
    return HttpResponse.json({
      status: "success",
      results: feedbackList.length,
      data: { feedbackList },
    })
  }),
]
