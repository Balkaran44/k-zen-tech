
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the base name from the repository name for GitHub Pages
// If not deployed to GitHub Pages, it will fallback to "/"
const getBasename = () => {
  // For local development, use "/"
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return '/';
  }

  // For GitHub Pages, use the repository name (e.g., "/repository-name")
  const pathname = window.location.pathname;
  const repoName = pathname.split('/')[1]; // Get the first part of the path
  return repoName ? `/${repoName}` : '/';
};

createRoot(document.getElementById("root")!).render(<App basename={getBasename()} />);
