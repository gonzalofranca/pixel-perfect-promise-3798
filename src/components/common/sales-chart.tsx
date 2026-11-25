import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { ventasMensuales } from "@/data/mock";

const config = {
  ventas: { label: "Ventas", color: "var(--chart-1)" },
  gastos: { label: "Egresos", color: "var(--chart-3)" },
} satisfies ChartConfig;

export function SalesChart() {
  return (
    <ChartContainer config={config} className="h-64 w-full">
      <AreaChart data={ventasMensuales} margin={{ left: 0, right: 8, top: 8 }}>
        <defs>
          <linearGradient id="fv" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-ventas)" stopOpacity={0.25} />
            <stop offset="100%" stopColor="var(--color-ventas)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="mes" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} width={44} tickFormatter={(v: number) => `${v / 1000}k`} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area dataKey="ventas" type="monotone" stroke="var(--color-ventas)" strokeWidth={2.5} fill="url(#fv)" />
        <Area dataKey="gastos" type="monotone" stroke="var(--color-gastos)" strokeWidth={2} fill="transparent" strokeDasharray="5 4" />
      </AreaChart>
    </ChartContainer>
  );
}
