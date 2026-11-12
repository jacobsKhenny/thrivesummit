import { describe, expect, it } from "vitest";
import { SPEAKERS_2026 } from "./speakers-2026";

describe("2026 speaker order", () => {
  it("places the host first and Rukayat Alabi second", () => {
    expect(SPEAKERS_2026[0]?.name).toBe("Aanuoluwapo Clement David-Olawade");
    expect(SPEAKERS_2026[1]?.name).toBe("Rukayat Alabi");
  });
});
