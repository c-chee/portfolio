# R2H Portfolio

## Overview
- Personal portfolio website, built to showcase my skills, projects, and web development practices.
---

## Features

### Reusable Navigation & Footer
- The navigation bar and footer are each maintained in a **single source file**.
- Both are **loaded dynamically using JavaScript** across the site.
- This approach ensures:
  - Consistent layout across all pages
  - Easier future updates
  - Reduced duplication of HTML

### Parallax-Inspired Hero Section
- The hero section is inspired by parallax scrolling.
- While it is not controlled by user scrolling, it uses a **multi-layered effect** to create a sense of depth.
- Each layer moves at a different speed, and the movement is **adjustable**, allowing fine control over the visual experience.

### Light & Dark Theme Toggle
- Includes a light and dark theme toggle.
- Colors change dynamically based on the selected theme.
- Implemented using:
  - JavaScript for theme switching logic
  - CSS custom properties such as `--primary` and `--secondary` to manage color variables efficiently

### Semantic HTML
- Built using **semantic HTML best practices**.
- Improves accessibility, readability, and maintainability.

### Responsive Design
- Fully responsive layout that adapts to mobile, tablet, and desktop screen sizes.

### JavaScript Slideshow
- A slideshow component built using JavaScript.
- Adds interactivity and dynamic content presentation.

### Dynamic Reflections Grid
- Reflection grid data is loaded **dynamically from a JSON file**.
- JavaScript fetches and renders the content, making updates easy without modifying HTML.

### Contact Form Validation
- The contact form does not submit data to a backend.
- Includes **client-side validation** to ensure proper input formatting and required fields.

---

## Purpose
This project was created to demonstrate:
- Front-end development fundamentals
- Semantic and accessible HTML structure
- Dynamic UI features using JavaScript
- Responsive and visually engaging design

