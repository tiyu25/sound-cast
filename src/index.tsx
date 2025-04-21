import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import "./assets/css/reset.css";
import "./assets/css/layout.css";
import "./assets/css/content.css";
import "./assets/css/component.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
