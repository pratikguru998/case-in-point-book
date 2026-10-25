# 💼 Case Interview Book

Visual, chapter-by-chapter study notes for consulting case interviews, built with [Docusaurus](https://docusaurus.io/).

- **7 chapters** in 4 parts, following the structure of Marc Cosentino's *Case in Point: Complete Case Interview Preparation* (8th ed., Burgee Press, 2013)
- The **Ivy Case System** and classic frameworks drawn as **Mermaid diagrams**
- **47 practice cases** (2 annotated, 10 case starts, 20 dialogue cases, 15 partner cases) with "try first, then reveal" walkthroughs
- **Page pointers** (📖) to the matching section of the book's PDF
- **Quizzes**, an interactive **mental-math drill**, a **case library**, a one-page **cheat sheet** and a **glossary**

All text and diagrams are original study notes, not excerpts from the book. Read the book itself for full depth.

## Run locally

```bash
npm install
npm start          # http://localhost:3000
```

## Add content

- Chapters: `docs/chapters/part-*/NN-*.mdx`
- Global MDX components (no import needed): `<Quiz>`, `<IconCards>`, `<BookRef pages="" section="">`, `<KeyIdea>`, `<CaseMeta level={1} types={[]} format="" pages="">`, `<Steps items={[]}>`, `<MathDrill>`

## Deploy

Every push to `main` builds the site and deploys it to GitHub Pages via `.github/workflows/deploy.yml`.
