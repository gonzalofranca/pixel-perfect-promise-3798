import { describe, expect, it } from "vitest";
import { formatFecha } from "@/lib/format";

describe("formatFecha", () => {
  it("usa DD/MM/AAAA", () => {
    expect(formatFecha("2026-03-07")).toBe("07/03/2026");
  });
});
