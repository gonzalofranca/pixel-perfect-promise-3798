// Data access for botanical species. Today: in-memory store seeded with mock data (browser session only).
// Later: replace the bodies with Supabase queries; components keep using these hooks.
import { useSyncExternalStore } from "react";
import { especies as seed } from "@/data/mock";
import type { Especie } from "@/types";

let state: Especie[] = seed;
const listeners = new Set<() => void>();
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
const emit = () => listeners.forEach((l) => l());

export function useEspecies() {
  return useSyncExternalStore(subscribe, () => state, () => seed);
}

export function useEspecie(id: string) {
  return useEspecies().find((e) => e.id === id);
}

export const especiesService = {
  upsert(e: Especie) {
    state = state.some((x) => x.id === e.id) ? state.map((x) => (x.id === e.id ? e : x)) : [e, ...state];
    emit();
  },
  remove(id: string) {
    state = state.filter((x) => x.id !== id);
    emit();
  },
};
