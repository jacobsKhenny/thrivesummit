import { describe, expect, it } from "vitest";
import { SPEAKERS_2026 } from "./speakers-2026";

describe("2026 speaker order", () => {
  it("features Aanu first and lists the other eight speakers in two rows of four", () => {
    expect(SPEAKERS_2026.map((speaker) => speaker.name)).toEqual([
      "Aanuoluwapo Clement David-Olawade",
      "Rukayat Alabi",
      "Dr Funmi Obembe",
      "Joanna Streames",
      "Morin Osunmakinde",
      "Prof. Mohamed Shaban",
      "Steve Tempest",
      "Fola Kongi",
      "Solafunmi Sholz Laelle",
    ]);
    expect(SPEAKERS_2026.length - 1).toBe(8);
  });

  it("places the host before the other listed speakers", () => {
    expect(SPEAKERS_2026[0]?.name).toBe("Aanuoluwapo Clement David-Olawade");
    expect(SPEAKERS_2026[1]?.name).toBe("Rukayat Alabi");
  });
});
