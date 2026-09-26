import { createFileRoute } from "@tanstack/react-router";

import { BirthdayExperience } from "@/components/birthday-experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para a minha Cinderela — Feliz aniversário, Goreth" },
      { name: "description", content: "Uma pequena história sobre nós, criada por Manuel para o 29.º aniversário da Goreth." },
      { property: "og:title", content: "Para a minha Cinderela" },
      { property: "og:description", content: "Uma pequena história sobre nós. Feliz 29.º aniversário, Goreth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayExperience,
});