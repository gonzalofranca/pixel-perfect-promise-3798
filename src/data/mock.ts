// Single source of simulated data. Replace with Supabase queries in src/services.
import monstera from "@/assets/plants/monstera.jpg.asset.json";
import lavanda from "@/assets/plants/lavanda.jpg.asset.json";
import ficus from "@/assets/plants/ficus.jpg.asset.json";
import aloe from "@/assets/plants/aloe.jpg.asset.json";
import pothos from "@/assets/plants/pothos.jpg.asset.json";
import malvon from "@/assets/plants/malvon.jpg.asset.json";
import romero from "@/assets/plants/romero.jpg.asset.json";
import sansevieria from "@/assets/plants/sansevieria.jpg.asset.json";
import type { Especie, Movimiento, StockBajo, Tarea } from "@/types";

export const vivero = { nombre: "Mi Vivero", usuario: "Gonzalo França", rol: "Administrador" };

export const especies: Especie[] = [
  {
    id: "monstera", nombreComun: "Costilla de Adán", nombreCientifico: "Monstera deliciosa", familia: "Araceae",
    categoria: "Follaje", imagen: monstera.url, ubicacion: "Interior", iluminacion: "Luz indirecta",
    descripcion: "Trepadora tropical de hojas grandes y perforadas. Muy demandada para interiores luminosos.",
    riego: "Cada 7–10 días, cuando los primeros 3 cm de sustrato estén secos.", temperatura: "18–27 °C. No tolera heladas.",
    humedad: "Media a alta (60 %).", sustrato: "Mezcla aireada: tierra, corteza de pino y perlita.",
    fertilizacion: "Fertilizante líquido equilibrado cada 15 días en primavera y verano.",
    poda: "Retirar hojas amarillas y guiar raíces aéreas.", floracion: "Rara en interior.",
    reproduccion: ["Esqueje", "Acodo aéreo"], trasplante: "Primavera, cada 2 años.",
    plagas: "Cochinilla algodonosa, ácaros.", toxicidad: "Tóxica para perros, gatos y personas si se ingiere.",
    consejos: "Colocar tutor de musgo para hojas más grandes.", observaciones: "Los esquejes con 2 nudos enraízan en ~3 semanas.",
    caracteristicas: ["Fácil cuidado", "Decorativa"],
  },
  {
    id: "lavanda", nombreComun: "Lavanda", nombreCientifico: "Lavandula angustifolia", familia: "Lamiaceae",
    categoria: "Aromática", imagen: lavanda.url, ubicacion: "Exterior", iluminacion: "Sol pleno",
    descripcion: "Arbusto aromático mediterráneo, atrae polinizadores y resiste la sequía.",
    riego: "Escaso, cada 10–14 días en verano.", temperatura: "-10–35 °C.", humedad: "Baja.",
    sustrato: "Bien drenado, arenoso, pH neutro a alcalino.", fertilizacion: "Mínima; compost en primavera.",
    poda: "Tras la floración, recortar un tercio.", floracion: "Fines de primavera y verano.",
    reproduccion: ["Esqueje", "Semilla"], trasplante: "Otoño o inicio de primavera.",
    plagas: "Pulgón, pudrición de raíz por exceso de riego.", toxicidad: "Levemente tóxica para mascotas.",
    consejos: "Evitar platos con agua acumulada.", observaciones: "Lote de esquejes de octubre con 85 % de éxito.",
    caracteristicas: ["Resistente a sequía", "Atrae polinizadores", "Aromática"],
  },
  {
    id: "ficus-lyrata", nombreComun: "Ficus pandurata", nombreCientifico: "Ficus lyrata", familia: "Moraceae",
    categoria: "Follaje", imagen: ficus.url, ubicacion: "Interior", iluminacion: "Luz indirecta",
    descripcion: "Árbol de interior de hojas grandes en forma de violín.",
    riego: "Cada 7 días; dejar secar la capa superficial.", temperatura: "16–26 °C.", humedad: "Media.",
    sustrato: "Universal con perlita.", fertilizacion: "Mensual en temporada de crecimiento.",
    poda: "Despunte para ramificar.", floracion: "No florece en interior.", reproduccion: ["Esqueje", "Acodo aéreo"],
    trasplante: "Primavera.", plagas: "Cochinilla, trips.", toxicidad: "Tóxica para mascotas.",
    consejos: "No moverlo de lugar: pierde hojas con los cambios.", observaciones: "",
    caracteristicas: ["Decorativa"],
  },
  {
    id: "aloe", nombreComun: "Aloe vera", nombreCientifico: "Aloe barbadensis miller", familia: "Asphodelaceae",
    categoria: "Suculenta", imagen: aloe.url, ubicacion: "Interior y exterior", iluminacion: "Sol pleno",
    descripcion: "Suculenta medicinal de hojas carnosas.", riego: "Cada 15–20 días.", temperatura: "10–30 °C.",
    humedad: "Baja.", sustrato: "Para cactus y suculentas.", fertilizacion: "Dos veces al año.", poda: "Retirar hojas secas.",
    floracion: "Invierno, vara amarilla.", reproduccion: ["Hijuelos"], trasplante: "Primavera.",
    plagas: "Cochinilla.", toxicidad: "Tóxica para mascotas.", consejos: "Separar hijuelos de 10 cm.",
    observaciones: "", caracteristicas: ["Resistente a sequía", "Fácil cuidado", "Medicinal"],
  },
  {
    id: "pothos", nombreComun: "Potus", nombreCientifico: "Epipremnum aureum", familia: "Araceae",
    categoria: "Follaje", imagen: pothos.url, ubicacion: "Interior", iluminacion: "Media sombra",
    descripcion: "Colgante muy resistente, ideal para principiantes.", riego: "Cada 7 días.", temperatura: "15–30 °C.",
    humedad: "Media.", sustrato: "Universal.", fertilizacion: "Mensual.", poda: "Despuntar para tupir.",
    floracion: "No florece en cultivo.", reproduccion: ["Esqueje"], trasplante: "Primavera.",
    plagas: "Pocas.", toxicidad: "Tóxica para mascotas.", consejos: "Enraíza en agua.",
    observaciones: "El más vendido en macetas colgantes.", caracteristicas: ["Fácil cuidado", "Colgante"],
  },
  {
    id: "malvon", nombreComun: "Malvón", nombreCientifico: "Pelargonium × hortorum", familia: "Geraniaceae",
    categoria: "Floral", imagen: malvon.url, ubicacion: "Exterior", iluminacion: "Sol pleno",
    descripcion: "Clásico de balcones con floración casi todo el año.", riego: "Cada 3–4 días en verano.",
    temperatura: "5–30 °C.", humedad: "Baja a media.", sustrato: "Universal bien drenado.",
    fertilizacion: "Rico en potasio cada 15 días.", poda: "Pinzado de flores secas.", floracion: "Primavera a otoño.",
    reproduccion: ["Esqueje", "Semilla"], trasplante: "Primavera.", plagas: "Mariposa del geranio, mosca blanca.",
    toxicidad: "Levemente tóxico para mascotas.", consejos: "Proteger de heladas.", observaciones: "",
    caracteristicas: ["Floración larga"],
  },
  {
    id: "romero", nombreComun: "Romero", nombreCientifico: "Salvia rosmarinus", familia: "Lamiaceae",
    categoria: "Aromática", imagen: romero.url, ubicacion: "Exterior", iluminacion: "Sol pleno",
    descripcion: "Aromática culinaria perenne y rústica.", riego: "Cada 10 días.", temperatura: "-5–35 °C.",
    humedad: "Baja.", sustrato: "Arenoso.", fertilizacion: "Escasa.", poda: "Ligera tras floración.",
    floracion: "Invierno y primavera.", reproduccion: ["Esqueje"], trasplante: "Otoño.",
    plagas: "Pocas.", toxicidad: "No tóxico.", consejos: "Ideal para huertas.", observaciones: "",
    caracteristicas: ["Resistente a sequía", "Aromática", "Comestible"],
  },
  {
    id: "sansevieria", nombreComun: "Lengua de suegra", nombreCientifico: "Dracaena trifasciata", familia: "Asparagaceae",
    categoria: "Suculenta", imagen: sansevieria.url, ubicacion: "Interior", iluminacion: "Sombra",
    descripcion: "Muy tolerante a la poca luz y al olvido de riego.", riego: "Cada 3 semanas.", temperatura: "12–30 °C.",
    humedad: "Baja.", sustrato: "Para suculentas.", fertilizacion: "Dos veces al año.", poda: "No requiere.",
    floracion: "Ocasional.", reproduccion: ["División", "Esqueje de hoja"], trasplante: "Cada 3 años.",
    plagas: "Pudrición por exceso de agua.", toxicidad: "Levemente tóxica.", consejos: "Purifica el aire.",
    observaciones: "", caracteristicas: ["Fácil cuidado", "Poca luz"],
  },
];

export const ventasMensuales = [
  { mes: "Jun", ventas: 98000, gastos: 61000 },
  { mes: "Jul", ventas: 87000, gastos: 58000 },
  { mes: "Ago", ventas: 112000, gastos: 64000 },
  { mes: "Sep", ventas: 145000, gastos: 72000 },
  { mes: "Oct", ventas: 176000, gastos: 81000 },
  { mes: "Nov", ventas: 162400, gastos: 79300 },
];

export const resumen = {
  ventasHoy: 8450, ventasHoyCant: 12, ventasMes: 162400, ingresosMes: 171900, egresosMes: 79300,
  plantasDisponibles: 1284, plantasProduccion: 640, valorInventario: 486200,
  porCobrar: 23800, porPagar: 41500,
};

export const movimientos: Movimiento[] = [
  { id: "m1", fecha: "2026-11-25", tipo: "venta", descripcion: "Venta #1042 · 3 Potus, 1 maceta", monto: 1890 },
  { id: "m2", fecha: "2026-11-25", tipo: "gasto", descripcion: "Agua y luz · UTE/OSE", monto: -4200 },
  { id: "m3", fecha: "2026-11-24", tipo: "compra", descripcion: "Sustratos del Este · 40 bolsas", monto: -18600 },
  { id: "m4", fecha: "2026-11-24", tipo: "venta", descripcion: "Venta #1041 · Ficus lyrata grande", monto: 3400 },
  { id: "m5", fecha: "2026-11-23", tipo: "ingreso", descripcion: "Cobro cuenta corriente · Laura Méndez", monto: 5000 },
];

export const tareas: Tarea[] = [
  { id: "t1", titulo: "Riego invernadero 2", tipo: "Riego", vence: "2026-11-25", prioridad: "Alta", asociado: "Bandejas de esquejes", hecha: false },
  { id: "t2", titulo: "Fertilizar malvones", tipo: "Fertilización", vence: "2026-11-25", prioridad: "Media", asociado: "Malvón", hecha: false },
  { id: "t3", titulo: "Control de cochinilla", tipo: "Control de plagas", vence: "2026-11-26", prioridad: "Alta", asociado: "Monstera 20 L", hecha: false },
  { id: "t4", titulo: "Trasplantar lote L-014", tipo: "Trasplante", vence: "2026-11-27", prioridad: "Media", asociado: "Lavanda", hecha: false },
];

export const stockBajo: StockBajo[] = [
  { id: "s1", producto: "Maceta terracota 14 cm", stock: 6, minimo: 20, unidad: "u" },
  { id: "s2", producto: "Sustrato universal 50 L", stock: 3, minimo: 10, unidad: "bolsas" },
  { id: "s3", producto: "Fertilizante líquido 1 L", stock: 2, minimo: 8, unidad: "u" },
];
