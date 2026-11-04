"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { type DataTableFeatures } from "./data-table-features"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Feedback = {
  customerName: string
  email: string
  message: string
  rating: number
  sentiment: "positive" | "neutral" | "negative"
  themes: string[]
  suggestedResponse: string
}

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
  }),
  columnHelper.accessor("sentiment", {
    header: "Sentiment",
  }),
  columnHelper.accessor("themes", {
    header: "Themes",
  }),
  columnHelper.accessor("suggestedResponse", {
    header: "Suggested Response",
  }),
])