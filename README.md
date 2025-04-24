# Enabler Website

A modern, responsive website for Enabler, showcasing luxury properties and experiences worldwide.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
.
├── common/
│   ├── css/
│   │   ├── style.css
│   │   ├── slick.css
│   │   └── slick-theme.css
│   ├── js/
│   │   ├── common.js
│   │   ├── jquery-3.3.1.min.js
│   │   └── slick.js
│   └── images/
│       ├── property*/
│       ├── logo*.png
│       └── icons/
├── index.html
└── package.json
```

## Required Assets

The following assets need to be placed in their respective directories:

### JavaScript Files (`common/js/`)
- jquery-3.3.1.min.js
- slick.js
- common.js

### Images (`common/images/`)
- Property Images:
  - property01.jpg to property05.jpg
  - property01_slider01.jpg to property05_slider04.jpg
- Logo Images:
  - logo_airbnb.png
  - logo_title_wh.svg
  - logo_mark_wh.svg
- UI Elements:
  - arrow_top.png
  - arrow_top_wh.png

## Development

This project uses:
- Vite for development and building
- jQuery for DOM manipulation
- Slick Carousel for image sliders

## License

All rights reserved © Enabler 