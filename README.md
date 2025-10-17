# Contwre — The One-Stop GTM Agency Website

A modern, immersive website for Contwre, Pakistan's first founder-led GTM agency. Built with React and Three.js for a premium, interactive experience that reflects the agency's innovative approach to growth marketing.

## Features

- 🚀 **React 18 + Vite** - Lightning-fast development and build
- 🎨 **Three.js Integration** - Immersive 3D background with floating particles
- 🎭 **Framer Motion** - Smooth animations and micro-interactions
- 🎨 **Tailwind CSS** - Custom Contwre brand colors and styling
- 📱 **Fully Responsive** - Optimized for all devices
- 🌟 **Glassmorphism Design** - Modern, premium aesthetic
- ⚡ **Performance Optimized** - Fast loading and smooth interactions
- ♿ **Accessibility** - WCAG compliant with reduced motion support

## Brand Colors

- **Background**: `#0B0E11` (deep black navy)
- **Blue Accent**: `#5B9CFF`
- **Mint Accent**: `#35E0B9`
- **Sand/Cream**: `#F5E6C8`
- **Slate Text**: `#9CA3AF`

## Sections

- **Hero** - Compelling headline with CTA buttons
- **Why We Exist** - Mission and optimization focus
- **GTM Engine** - Four-phase framework breakdown
- **Services** - Four core service pillars
- **Process** - 90-day implementation plan
- **Results** - Stats and client testimonials
- **FAQ** - Common questions and answers
- **CTA** - Free GTM audit booking form

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

The `vercel.json` file contains the necessary configuration for Vercel deployment.

## Project Structure

```
src/
├── components/          # React components
│   ├── Scene3D.jsx     # Three.js background scene
│   ├── Header.jsx      # Navigation with glassmorphism
│   ├── Hero.jsx        # Hero section with gradients
│   ├── About.jsx       # Why we exist section
│   ├── GTMEngine.jsx   # Four-phase GTM framework
│   ├── Services.jsx    # Service offerings grid
│   ├── Process.jsx     # How we work timeline
│   ├── Results.jsx     # Stats and testimonials
│   ├── FAQ.jsx         # Frequently asked questions
│   ├── CTA.jsx         # Booking form
│   └── Footer.jsx      # Footer with brand info
├── hooks/              # Custom React hooks
│   ├── useScrollTo.js  # Smooth scrolling utilities
│   └── useScrollAnimation.js # Scroll-based animations
├── styles/             # CSS files
│   └── index.css       # Main stylesheet with brand colors
├── utils/              # Utility functions
├── assets/             # Static assets
├── App.jsx             # Main App component
└── main.jsx            # Entry point
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Vercel** - Deployment platform

## Performance Features

- Code splitting for optimal loading
- Optimized Three.js scene with instanced meshes
- Smooth scroll animations with intersection observer
- Reduced motion support for accessibility
- Mobile-first responsive design

## License

MIT License
