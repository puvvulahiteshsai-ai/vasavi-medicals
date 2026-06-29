# Sri Vasavi Medical Hall — Website

## Setup
1. Make sure Node.js is installed (https://nodejs.org)
2. Open this folder in VS Code
3. Open terminal and run:

```
npm install
npm run dev
```

4. Open http://localhost:5173 in your browser

## Build for production
```
npm run build
```

## File structure
```
src/
├── App.jsx              — root component, imports all sections
├── main.jsx             — entry point
├── index.css            — all styles
├── data.js              — reviews, services, gallery, contact data
└── components/
    ├── Nav.jsx
    ├── Hero.jsx
    ├── QuickBar.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Gallery.jsx
    ├── Reviews.jsx
    ├── Owner.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## To add owner photo
Replace the placeholder in `src/components/Owner.jsx`:
- Add photo as `public/images/owner.jpg`
- Replace the `<div className="owner__circle">` block with:
  `<img src="/images/owner.jpg" alt="Owner Name" />`
