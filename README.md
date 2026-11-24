# ✨ Magic Menu UI KIT

A professional-grade collection of 10 distinct, highly interactive, and aesthetically pleasing "Magic Menu" UI components. Built with **React**, **Tailwind CSS**, and **Framer Motion**, this kit is designed to elevate user experiences with smooth physics-based animations and modern design trends.

[![GitHub Repo](https://img.shields.io/badge/GitHub-farhan-swe%2FMagic--Menu--UI--KIT-blue?logo=github)](https://github.com/farhan-swe/Magic-Menu-UI-KIT)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Framework](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Styling](https://img.shields.io/badge/Tailwind--CSS-3.4+-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Animation](https://img.shields.io/badge/Framer--Motion-12-ff0055?logo=framer)](https://www.framer.com/motion/)

---

## 🚀 Featured Styles

The kit includes 10 unique menu interaction styles, each tailored for different brand aesthetics:

1.  **Radial Burst**: A circular expansion with staggered, spring-based animations.
2.  **Gooey Liquid**: Metaball-inspired liquid fusion effect using SVG filters.
3.  **Glass Float**: Modern frosted glass (Glassmorphism) with subtle depth and backdrop blurs.
4.  **Cyberpunk Neon**: High-contrast glows, skewed geometry, and glitchy terminal aesthetics.
5.  **Bento Grid**: Structured modular layout inspired by Apple's dashboard design.
6.  **Neumorphic Soft**: Tactile extrusion using soft light and shadows for a "skeuomorphic" touch.
7.  **Mac Dock**: A pixel-perfect recreation of the macOS dock magnification effect.
8.  **Elastic Slide**: Playful spring-based movement with stretching physics.
9.  **3D Perspective**: Isotropic 3D rotation and depth stacking for a tangible UI feel.
10. **Magnetic Hover**: Advanced cursor interaction where elements "pull" toward the mouse.

---

## 🛠 Tech Stack

*   **Frontend**: React (ES6 Modules)
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Typeface**: Inter & Space Grotesk

---

## 📦 Installation

To use these components in your own project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/farhan-swe/Magic-Menu-UI-KIT.git
   cd Magic-Menu-UI-KIT
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn add framer-motion lucide-react clsx tailwind-merge
   ```

3. **Tailwind Setup**:
   Ensure you have Tailwind CSS configured in your project. Add the following to your `tailwind.config.js` if you want to use the custom font:
   ```javascript
   theme: {
     extend: {
       fontFamily: {
         space: ['Space Grotesk', 'sans-serif'],
       },
     },
   }
   ```

4. **Gooey Effect (Optional)**:
   For the Gooey Liquid menu to work, include the SVG filter found in `index.html` at the root of your application.

---

## 📖 Usage

Each menu is a standalone component. You can import them directly:

```tsx
import RadialMenu from './components/RadialMenu';

function App() {
  return (
    <div className="container">
      <RadialMenu />
    </div>
  );
}
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/farhan-swe/Magic-Menu-UI-KIT/issues).

## 📜 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## 👤 Author

**farhan-swe**
*   GitHub: [@farhan-swe](https://github.com/farhan-swe)
*   Project Link: [Magic-Menu-UI-KIT](https://github.com/farhan-swe/Magic-Menu-UI-KIT)

---
*Show your support by giving a ⭐️ if you like this project!*
