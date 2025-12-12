# Portfolio Website

Professional portfolio website showcasing my work as a Software Architect and Full-stack Developer.

🔗 **Live Site**: [ceffiong.dev](https://ceffiong.dev)

## Overview

This is a modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. It features a clean design with smooth animations, project filtering, and SEO optimization through structured data.

## Features

### ✨ Interactive Elements
- **Typewriter Effect** - Animated hero text that types out on page load
- **Project Filtering** - Filter portfolio projects by category (Frontend, Mobile, Full-stack)
- **Tech Stack Icons** - Visual technology icons using Devicon library
- **Smooth Scroll Animations** - Fade-in effects powered by AOS (Animate On Scroll)
- **Responsive Navigation** - Mobile-friendly hamburger menu

### 📱 Sections
- **Home** - Hero section with animated introduction
- **Portfolio** - Filterable grid of 11 projects with technology icons
- **Skills & Technologies** - Categorized skill set display
- **Blog** - Links to Medium articles
- **Mentoring** - Information about teaching role at Masterschool
- **Connect** - Contact form and social media links

### 🚀 Performance & SEO
- **Structured Data (Schema.org)** - JSON-LD markup for Person, WebSite, and ItemList
- **Meta Tags** - Complete Open Graph and Twitter Card metadata
- **Semantic HTML** - Proper HTML5 structure
- **Optimized Assets** - Efficient loading and rendering

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with flexbox and grid
- **Vanilla JavaScript** - Interactive features (no frameworks)
- **AOS** - Animate On Scroll library
- **Devicon** - Technology logos and icons
- **Google Fonts** - Karla and Gabarito typefaces

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Custom styles
│   └── aos.css            # AOS animation styles
├── js/
│   ├── script.js          # Main JavaScript (typewriter, filtering, navigation)
│   └── aos.js             # AOS library
├── img/                   # Images and assets
└── Features.md            # Future enhancement ideas
```

## Key Features Implementation

### Portfolio Filtering
Projects are categorized with `data-category` attributes and filtered using vanilla JavaScript:
- Frontend projects (4)
- Mobile projects (1)
- Full-stack projects (6)

### Typewriter Effect
Custom JavaScript animation that types out "Hi, I'm a Software Architect." with line breaks and styled text.

### Tech Stack Icons
Each project displays relevant technology icons with hover effects for quick visual scanning of skills used.

### Structured Data
Three JSON-LD schemas for enhanced SEO:
1. Person schema - Professional profile
2. WebSite schema - Portfolio site information
3. ItemList schema - Featured projects

## Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/ceffiong/portfolio.git
```

2. Open `index.html` in your browser:
```bash
open index.html
```

No build process or dependencies required - it's a static site!

## Featured Projects

- **Frouple** - React Native mobile app with AWS backend
- **Fluentino** - Next.js + Django language learning platform
- **Multi-user Blog** - Django blog platform for programming articles
- **TaxiHome** - Taxi booking website with Google Location API
- **Citygeeks** - WordPress e-commerce site redesign
- And 6 more projects...

## Contact

- **Email**: [contact@ceffiong.dev](mailto:contact@ceffiong.dev)
- **GitHub**: [@ceffiong](https://github.com/ceffiong)
- **LinkedIn**: [ceffiong](https://www.linkedin.com/in/ceffiong/)
- **Medium**: [@ceffiong](https://ceffiong.medium.com)

## License

© 2024 Charles Effiong. All rights reserved.

---

Built with ❤️ in Linz, Austria
