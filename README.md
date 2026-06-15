# Personal Portfolio Website

A responsive personal portfolio starter built with HTML, CSS, and JavaScript. Includes an About section, Skills section, Projects section, and Contact form — ready to customize with your own content.

## Features

- **Responsive layout** — works on mobile, tablet, and desktop
- **Sticky navigation** — smooth scrolling to each section
- **Mobile menu** — hamburger toggle with animated open/close
- **Contact form** — client-side submit feedback (no backend required)
- **Modern dark theme** — clean typography and card-based sections

## Project Structure

```
Week1_Portfolio/
├── index.html   # Page structure and content
├── style.css    # Layout, theme, and responsive styles
├── script.js    # Navigation toggle and form interaction
└── README.md
```

## Getting Started

No build step or dependencies required.

1. Clone or download this repository
2. Open `index.html` in your browser

Or use a local server for live reload during development:

```bash
# Python
python -m http.server 8000

# Node.js (if you have npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Customization

| What to change | Where |
|----------------|-------|
| Name, bio, projects | `index.html` |
| Colors, spacing, layout | `style.css` (`:root` variables at the top) |
| Button / menu behavior | `script.js` |

Replace placeholder project links (`href="#"`) with your live demos or GitHub repos. Swap the About photo placeholder with a real `<img>` when you have one.

## Technologies

- HTML5
- CSS3 (Flexbox, Grid, media queries, CSS variables)
- Vanilla JavaScript

## License

Free to use and modify for your personal portfolio.
