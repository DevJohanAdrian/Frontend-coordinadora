"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Separator } from "@/shared/components/ui/separator"

interface LabeledSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  orientation?: "horizontal" | "vertical"
  align?: "start" | "center" | "end"
  decorative?: boolean
}

const LabeledSeparator = React.forwardRef<HTMLDivElement, LabeledSeparatorProps>(
  ({ className, label, orientation = "horizontal", align = "center", decorative = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2 box-border",
          orientation === "vertical" ? "flex-col" : "flex-row w-full",
          className,
        )}
        style={{ maxWidth: "100%", overflow: "hidden" }}
        {...props}
      >
        {align !== "start" && (
          <Separator
            orientation={orientation}
            decorative={decorative}
            className={cn(align === "center" && "flex-1", orientation === "vertical" && "h-full", "min-w-0")}
          />
        )}
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap shrink-0">{label}</span>
        {align !== "end" && (
          <Separator
            orientation={orientation}
            decorative={decorative}
            className={cn(align === "center" && "flex-1", orientation === "vertical" && "h-full", "min-w-0")}
          />
        )}
      </div>
    )
  },
)
LabeledSeparator.displayName = "LabeledSeparator"

export { LabeledSeparator }
