"use client"

import { createColumnHelper } from "@tanstack/react-table"
import { Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { type DataTableFeatures } from "./data-table-features"
import { type Feedback } from "./feedback"

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Feedback>()

const ratingToStars = (rating: number) => {
  return (
    <span className="inline-flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={`size-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
        />
      ))}
    </span>
  )
}

export const columns = columnHelper.columns([
  columnHelper.accessor("customerName", {
    header: "Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("message", {
    header: "Message",
  }),
  columnHelper.accessor("rating", {
    header: "Rating",
    cell: (info) => {
      const numRating: number = info.getValue() ?? 0;
      return ratingToStars(numRating);
    }
  }),
  columnHelper.accessor("sentiment", {
    header: "Sentiment",
    cell: (info) => {
      const sentiment = info.getValue()
      return (
        <Badge variant={sentiment === "unknown" ? "neutral" : sentiment}>
          {sentiment === "unknown" ? "Unknown" : sentiment}
        </Badge>
      )
    },
  }),
  columnHelper.accessor("themes", {
    header: "Themes",
    cell: (info) => info.getValue().join(", ") || "—",
  }),
  columnHelper.accessor("suggestedResponse", {
    header: "Suggested Response",
    cell: (info) => info.getValue() || "—",
  }),
])
