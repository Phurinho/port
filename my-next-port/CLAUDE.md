@AGENTS.md

# Portfolio Migration Project

## 📌 Project Overview

You are an expert Frontend Developer. Your task is to refactor and migrate a legacy portfolio website from plain HTML, CSS, and vanilla JavaScript into a modern, static Next.js application.

## 📂 Source Material

- The legacy code is located inside the `/port` directory.
- Please analyze the HTML structure, CSS styling, and JS logic within this folder before writing any new code.

## 🛠 Tech Stack & Strict Rules

1. **Framework:** Next.js (Use App Router). The project must be configured for a Static Export (ensure `output: 'export'` is in `next.config.js`).
2. **Styling:** Strictly use **Tailwind CSS**. Translate all legacy custom CSS into Tailwind utility classes. Do not write custom CSS unless absolutely necessary.
3. **Icons:** Replace all existing FontAwesome icons (`fa-`, `fas-`, `fab-`) with **Lucide Icons** (`lucide-react`).
4. **Architecture:** Break down the monolithic HTML file into reusable React components (e.g., `<Navbar />`, `<Hero />`, `<ProjectCard />`, `<Footer />`).

## 🚀 Execution Steps for AI

1. **Read & Understand:** Scan the files in the `/port` folder. Identify the layout sections, color palettes, and interactive elements.
2. **Map Icons:** Find all FontAwesome classes used in the old HTML and map them to their closest equivalent in `lucide-react`.
3. **Component Generation:** Create modular React components for each section using Tailwind CSS for styling.
4. **Refactor Logic:** Convert vanilla JavaScript DOM manipulations into React state (`useState`) or standard React hooks if interaction is needed.
5. **Static Compatibility:** Ensure no server-side dynamic functions (like API routes that require a Node server) are used, as this site will be statically hosted.
