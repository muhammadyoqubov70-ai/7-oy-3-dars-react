export const features = [
  {
    id: "adaptive-design",
    icon: "Palette",
    title: "Adaptive Design",
    short: "Instantly adapts to any color scheme using CSS variables.",
    details: "Every color in this app is controlled by CSS custom properties. When you switch between dark and light mode, only the variable values change — no component re-renders, no flashing, no layout shift. This makes theming instant and painless to extend to new colors or brand palettes."
  },
  {
    id: "fast-performance",
    icon: "Zap",
    title: "Fast Performance",
    short: "Only CSS variables switch, no page reload required.",
    details: "Because theme switching happens purely at the CSS layer, there's zero JavaScript re-rendering cost beyond a single attribute change on the html element. This means the transition feels instant, even on lower-end devices, and doesn't interrupt whatever the user is doing on the page."
  },
  {
    id: "reliable-storage",
    icon: "Shield",
    title: "Reliable Storage",
    short: "Your chosen theme is saved in localStorage.",
    details: "The app remembers your preferred theme across visits using the browser's localStorage. The moment you toggle the theme, it's saved — so next time you open the site, it opens exactly how you left it, without any flash of the wrong theme."
  }
];
