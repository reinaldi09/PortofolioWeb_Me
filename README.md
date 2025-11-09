# Ahmad Reinaldi Portfolio

A professional portfolio website for Ahmad Reinaldi, showcasing his expertise in automation engineering, AI, and workflow optimization.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with neobrutalist elements
- **Blog System**: Complete blog with multiple articles on automation and AI topics
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimizations
- **Production Ready**: Uses local Tailwind CSS build instead of CDN

## 📁 Project Structure

```
d:/Belajar FrontEnd/Portofolio_web_Ahmad_Reinaldi/
├── index.html                    # Main portfolio page
├── package.json                  # Node.js dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── README.md                     # This file
├── assets/
│   ├── css/
│   │   ├── input.css            # Tailwind input file
│   │   └── styles.css           # Compiled CSS output
│   ├── js/
│   │   └── scripts.js           # Custom JavaScript
│   └── images/                  # Image assets
├── blog/                        # Blog pages
│   ├── all_blog.html           # Blog collection page
│   ├── n8n-automation-workflow.html
│   ├── future-ai-manufacturing.html
│   ├── no-code-tools-prototyping.html
│   ├── data-storytelling.html
│   ├── ethical-ai.html
│   └── workflow-optimization.html
└── pages/                       # Additional pages (ready for expansion)
```

## 🛠️ Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd d:/Belajar FrontEnd/Portofolio_web_Ahmad_Reinaldi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS for production**
   ```bash
   npm run build
   ```

4. **Development with watch mode**
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- `npm run build` - Build optimized CSS for production
- `npm run dev` - Start development mode with file watching
- `npm run build-css` - Alternative build command

## 🎨 Design System

### Colors
- **Primary**: `#F7FF00` (Bright Yellow)
- **Secondary**: `#4ADE80` (Green)
- **Dark**: `#111827` (Dark Gray)
- **Light**: `#F9FAFB` (Light Gray)

### Typography
- **Font Family**: Space Grotesk
- **Material Symbols**: For icons and UI elements

### Components
- Neobrutalist buttons with hover effects
- Card layouts with shadow effects
- Responsive grid systems
- Mobile-first responsive design

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

## 🚀 Deployment

### For Production Deployment:

1. **Build the CSS**
   ```bash
   npm run build
   ```

2. **Upload all files** to your web server
   - All HTML files
   - `assets/` folder (containing compiled CSS and JS)
   - `blog/` folder
   - Any other static assets

3. **No external dependencies** required - everything is self-contained

### Hosting Recommendations:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 🔧 Customization

### Adding New Blog Posts:
1. Create new HTML file in `blog/` directory
2. Follow the existing template structure
3. Update navigation links in `blog/all_blog.html`
4. Add to main portfolio blog section if desired

### Modifying Styles:
1. Edit `assets/css/input.css` for new styles
2. Run `npm run build` to compile
3. Or use `npm run dev` for development

### Adding New Pages:
1. Create HTML file in `pages/` directory
2. Update navigation links
3. Follow existing responsive patterns

## 📊 Performance

- **CSS**: Minified and optimized
- **Images**: Properly sized and optimized
- **JavaScript**: Minimal and efficient
- **No external CDN dependencies** for production

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please create an issue or submit a pull request.

## 📄 License

© 2025 Ahmad Reinaldi. All rights reserved.

## 📞 Contact

- **Email**: gragihproject@gmail.com
- **LinkedIn**: [Ahmad Reinaldi Akbar](https://www.linkedin.com/in/ahmad-reinaldi-akbar/)
- **GitHub**: [reinaldi09](https://github.com/reinaldi09)
- **Instagram**: [reinaldiakbaar](https://www.instagram.com/reinaldiakbaar/)
- **Threads**: [reinaldiakbaar](https://www.threads.com/@reinaldiakbaar)

---

Built with ❤️ using HTML, CSS, JavaScript, and Tailwind CSS.