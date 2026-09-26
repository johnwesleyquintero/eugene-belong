# Eugene Belong — Portfolio & Resume

A clean, professional portfolio and resume website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with a premium forest-green aesthetic — minimal, animated, and elegant.

![Status](https://img.shields.io/badge/status-live-success?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=flat-square&logo=framer)

---

## Features

- **Single-file resume data** — All content (profile, experience, skills, education, links, images) lives in `src/resumeData.ts` for easy updates.
- **Forest green color palette** — Cohesive nature-inspired theme using `#435146`, `#1C1C1C`, `#4A6958`, `#1B2922` across both light and dark modes.
- **Light & Dark mode** — Toggle between a clean forest-light theme and a premium forest-night dark theme. Preference is saved in localStorage and respects system preference on first visit.
- **Neural background** — Interactive particle network animation using `motion.div` and canvas. Responds to mouse movement with theme-aware particles that adapt to light/dark mode.
- **Scroll animations** — Sections fade in and slide up as you scroll, experience cards slide in from the left with staggered delays, and stat cards scale in elegantly.
- **Cover photo banner** — LinkedIn-style hero section with a full-width cover photo and overlapping profile picture with gradient ring.
- **Print to PDF** — Dedicated button to export the portfolio as a clean, professional PDF document.
- **Sticky navigation** — Quick-access nav bar with smooth scrolling to each section.
- **Responsive layout** — Fully mobile-friendly, works on all screen sizes.
- **Lucide icons** — Lightweight, consistent icon set via `lucide-react`.
- **Print-friendly** — Clean print styles with automatic light-mode fallback for professional PDF output.
- **Zero emojis** — Professional look using only icons and typography.

---

## Tech Stack

| Tool            | Purpose                          |
| --------------- | -------------------------------- |
| React 18        | UI framework                     |
| Vite 6          | Build tool & dev server          |
| TypeScript      | Type-safe code                   |
| Tailwind CSS 4  | Utility-first styling            |
| Framer Motion   | Animations & transitions         |
| Lucide React    | Icon library                     |

---

## Project Structure

```
├── index.html              # Entry HTML with favicon & meta
├── public/
│   └── favicon.svg         # SVG favicon (forest green "E" badge)
├── src/
│   ├── App.tsx             # Main portfolio component
│   ├── NeuralBackground.tsx # Interactive particle network background
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global styles, theme variables & Tailwind
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
    coverImage: "https://media.licdn.com/...",
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
| **Header**           | Cover photo, profile photo with gradient ring, name, title, and contact links |
| **Summary**          | Professional summary paragraph with accent border  |
| **Core Skills**      | Skill tags displayed as interactive badges         |
| **Experience**       | 18 job cards with role, company, date, location, bullets, and skills |
| **Education**        | Degree and school information in a 2-column grid   |
| **Quick Stats**      | At-a-glance numbers (12+ years, 18 companies, 15 skills, 2 degrees) |
| **Footer**           | Copyright and contact links                        |

---

## Color Palette

The theme uses a cohesive **forest green** palette:

| Hex       | Name             | Usage                                    |
| --------- | ---------------- | ---------------------------------------- |
| `#435146` | Medium Forest    | Accents, secondary text, gradient stops  |
| `#1C1C1C` | Near Black       | Dark mode backgrounds, primary text (light mode) |
| `#4A6958` | Deep Sage        | Primary accent, buttons, links, highlights |
| `#1B2922` | Dark Forest      | Dark mode secondary backgrounds          |

### Light Theme

| Token            | Hex       | Usage              |
| ---------------- | --------- | ------------------ |
| Background       | `#f8f9f8` | Page background    |
| Surface          | `#ffffff` | Card backgrounds   |
| Text primary     | `#1C1C1C` | Body text          |
| Text secondary   | `#435146` | Muted text         |
| Accent           | `#4A6958` | Links & highlights |
| Border           | `#d4dbd6` | Dividers & borders |
| Tag background   | `#e8ebe8` | Skill tags         |

### Dark Theme

| Token            | Hex       | Usage              |
| ---------------- | --------- | ------------------ |
| Background       | `#1C1C1C` | Page background    |
| Surface          | `#242d27` | Card backgrounds   |
| Text primary     | `#f0f2f0` | Body text          |
| Text secondary   | `#b8c4ba` | Muted text         |
| Accent           | `#6b8a74` | Links & highlights |
| Border           | `#344038` | Dividers & borders |
| Tag background   | `#2a352e` | Skill tags         |

### Fonts

Uses **Inter** from Google Fonts with system-ui fallback.

---

## Theme Toggle

The theme toggle button (sun/moon icon) is located in the top navigation bar:

- **First visit**: Detects system preference (`prefers-color-scheme`)
- **Subsequent visits**: Loads saved preference from `localStorage`
- **Manual toggle**: Click the icon to switch themes instantly
- **Print**: Automatically uses light mode for clean PDF output

---

## Neural Background

The interactive particle network background (`src/NeuralBackground.tsx`) features:

- **Theme-aware particles** — Colors adapt to light/dark mode
- **Mouse interaction** — Particles connect to cursor within 180px radius
- **Particle connections** — Lines drawn between particles within 140px
- **Performance optimized** — 70 particles on desktop, 35 on mobile
- **Smooth animations** — Wrapped in `motion.div` with fade-in on load
- **Hidden in print** — Automatically disabled when printing

---

## Print to PDF

Click the **Print / PDF** button in the navigation bar to export the portfolio:

- Navigation bar is automatically hidden
- Neural background is disabled
- Cover photo is hidden to save space
- All experience details are fully visible
- Colors switch to light mode for professional output
- Optimized margins and page breaks for clean PDF

---

## Customization

### Changing the Color Palette

Edit the CSS variables in `src/index.css`:

```css
:root {
  /* Light Theme */
  --text-accent: #4A6958;
  --gradient-text-from: #4A6958;
  /* ... */
}

html.dark {
  /* Dark Theme */
  --text-accent: #6b8a74;
  --gradient-text-from: #8aaa94;
  /* ... */
}
```

### Changing the Neural Background

Edit `src/NeuralBackground.tsx` to customize:

```ts
const palette = isDark
  ? {
      particle: { r: 107, g: 138, b: 116 }, // Particle color
      particleOpacity: 0.6,
      connectionOpacity: 0.25,
      warm: { r: 74, g: 105, b: 88 }, // Accent color
      warmOpacity: 0.4,
    }
  : {
      // Light mode colors...
    };
```

---

## License

This project is for personal use. Feel free to fork and customize for your own portfolio.

---

## Contact

**Eugene Belong**  
Davao City, Philippines  
Email: [eugenebelong.va3@gmail.com](mailto:eugenebelong.va3@gmail.com)  
LinkedIn: [linkedin.com/in/eugene-belong-46b472393](https://linkedin.com/in/eugene-belong-46b472393)
