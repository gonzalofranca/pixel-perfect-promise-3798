// Domain types. Shapes mirror future Supabase tables (snake_case mapping happens in src/services).
export type Ubicacion = "Interior" | "Exterior" | "Interior y exterior";
export type Iluminacion = "Sol pleno" | "Media sombra" | "Luz indirecta" | "Sombra";
export type CategoriaEspecie = "Follaje" | "Floral" | "Suculenta" | "Aromática";

export interface Especie {
  id: string;
  nombreComun: string;
  nombreCientifico: string;
  familia: string;
  categoria: CategoriaEspecie;
  imagen: string;
  descripcion: string;
  ubicacion: Ubicacion;
  iluminacion: Iluminacion;
  riego: string;
  temperatura: string;
  humedad: string;
  sustrato: string;
  fertilizacion: string;
  poda: string;
  floracion: string;
  reproduccion: string[];
  trasplante: string;
  plagas: string;
  toxicidad: string;
  consejos: string;
  observaciones: string;
  caracteristicas: string[];
}

export interface Movimiento {
  id: string;
  fecha: string;
  tipo: "venta" | "compra" | "gasto" | "ingreso";
  descripcion: string;
  monto: number;
}

export interface Tarea {
  id: string;
  titulo: string;
  tipo: "Riego" | "Fertilización" | "Poda" | "Trasplante" | "Control de plagas" | "Reproducción" | "Mantenimiento" | "Otra";
  vence: string;
  prioridad: "Alta" | "Media" | "Baja";
  asociado?: string;
  hecha: boolean;
}

export interface StockBajo {
  id: string;
  producto: string;
  stock: number;
  minimo: number;
  unidad: string;
}
