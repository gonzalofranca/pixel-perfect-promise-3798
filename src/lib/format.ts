const moneda = new Intl.NumberFormat("es-UY", { style: "currency", currency: "UYU", maximumFractionDigits: 0 });
const numero = new Intl.NumberFormat("es-UY");

export const formatUYU = (n: number) => moneda.format(n);
export const formatNum = (n: number) => numero.format(n);

/** DD/MM/AAAA, string-based so server and browser render the same text. */
export function formatFecha(iso: string) {
  const [y, m, d] = iso.slice(0, 10).split("-");
  return `${d ?? ""}/${m ?? ""}/${y ?? ""}`;
}
