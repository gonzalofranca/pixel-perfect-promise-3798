import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({ label, value, hint, icon: Icon, tone = "default" }: {
  label: string; value: string; hint?: string; icon: LucideIcon; tone?: "default" | "terracotta" | "sage" | "warning";
}) {
  const toneCls = {
    default: "bg-secondary text-primary",
    terracotta: "bg-terracotta-soft text-terracotta",
    sage: "bg-sage/20 text-primary",
    warning: "bg-warning-soft text-foreground",
  }[tone];
  return (
    <div className="rounded-2xl border bg-card p-4 shadow-soft md:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="min-w-0 text-sm font-medium text-muted-foreground">{label}</p>
        <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", toneCls)}><Icon className="size-[18px]" /></span>
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
      {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
    </div>
  );
}
