"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { type DataTableFeatures } from "./data-table-features"
import { type Feedback } from "./feedback"

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Feedback>()

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
    cell: (info) => info.getValue() ?? "—",
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
