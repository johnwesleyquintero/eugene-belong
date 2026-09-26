# Eugene Belong — Portfolio & Resume

A clean, professional portfolio and resume website built with **React**, **Vite**, and **Tailwind CSS**. Designed with a Notion / LinkedIn-inspired aesthetic — minimal, readable, and elegant.

![Preview](https://img.shields.io/badge/status-live-success?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)

---

## Features

- **Single-file resume data** — All content (profile, experience, skills, education, links) lives in `src/resumeData.ts` for easy updates.
- **Notion / LinkedIn-inspired design** — Clean typography, subtle borders, soft color-coded section icons, and a calm neutral palette.
- **Interactive experience cards** — Click any job to expand and view details, bullet points, and skills.
- **Sticky navigation** — Quick-access nav bar with smooth scrolling to each section.
- **Responsive layout** — Fully mobile-friendly, works on all screen sizes.
- **Lucide icons** — Lightweight, consistent icon set via `lucide-react`.
- **Print-friendly** — Clean print styles included.
- **Zero emojis** — Professional look using only icons and typography.

---

## Tech Stack

| Tool           | Purpose                          |
| -------------- | -------------------------------- |
| React 18       | UI framework                     |
| Vite 6         | Build tool & dev server          |
| TypeScript     | Type-safe code                   |
| Tailwind CSS 4 | Utility-first styling            |
| Lucide React   | Icon library                     |

---

## Project Structure

```
├── index.html              # Entry HTML with favicon & meta
├── public/
│   └── favicon.svg         # SVG favicon (blue "E" badge)
├── src/
│   ├── App.tsx             # Main portfolio component
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global styles & Tailwind import
│   └── resumeData.ts       # All resume data in one file
├── package.json
├── vite.config.js
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Type Check

```bash
npm run typecheck
```

---

## Updating Resume Data

All resume content is centralized in **`src/resumeData.ts`**. To update any information, simply edit the corresponding field:

### Profile Info

```ts
export const resumeData = {
  profile: {
    name: "Eugene Belong",
    title: "Logistics & Operations Support Professional",
    location: "Davao City, Philippines",
    phone: "09673856254",
    email: "eugenebelong.va3@gmail.com",
    linkedin: "https://linkedin.com/in/eugene-belong-46b472393",
    linkedinDisplay: "linkedin.com/in/eugene-belong-46b472393",
    image: "https://media.licdn.com/...",
  },
  // ...
};
```

### Adding a New Job

Add a new object to the `experience` array:

```ts
{
  role: "Your Job Title",
  company: "Company Name",
  date: "Jan 2024 – Present",
  location: "City · Remote · Full-time",
  bullets: [
    "Description of what you did...",
    "Another accomplishment...",
  ],
  skills: ["Skill 1", "Skill 2"],
},
```

### Adding Skills

Add strings to the `coreSkills` array:

```ts
coreSkills: [
  "Logistics Coordination & Support",
  "Your New Skill Here",
],
```

### Adding Education

Add a new object to the `education` array:

```ts
{
  degree: "Your Degree",
  school: "School Name",
  year: "2020 – 2024",
},
```

---

## Sections

| Section              | Description                                        |
| -------------------- | -------------------------------------------------- |
| **Header**           | Profile photo, name, title, and contact links      |
| **Summary**          | Professional summary paragraph                     |
| **Core Skills**      | Skill tags displayed as interactive badges         |
| **Experience**       | Clickable job cards with expandable details        |
| **Education**        | Degree and school information                      |
| **Quick Stats**      | At-a-glance numbers (12+ years, 18 companies, 15 skills, 2 degrees) |
| **Footer**           | Copyright and contact links                        |

---

## Customization

### Colors

The theme uses Notion-inspired neutral colors:

| Token         | Hex       | Usage              |
| ------------- | --------- | ------------------ |
| Text primary  | `#37352f` | Body text          |
| Text secondary| `#787774` | Muted text         |
| Border        | `#e8e8e4` | Dividers & borders |
| Background    | `#ffffff` | Page background    |
| Surface       | `#f1f1ef` | Tag backgrounds    |
| Accent blue   | `#2383e2` | Links & highlights |

### Fonts

Uses **Inter** from Google Fonts with system-ui fallback.

---

## License

This project is for personal use. Feel free to fork and customize for your own portfolio.

---

## Contact

**Eugene Belong**  
Davao City, Philippines  
Email: [eugenebelong.va3@gmail.com](mailto:eugenebelong.va3@gmail.com)  
LinkedIn: [linkedin.com/in/eugene-belong-46b472393](https://linkedin.com/in/eugene-belong-46b472393)
