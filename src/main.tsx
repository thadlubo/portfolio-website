import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

document.documentElement.classList.add('dark') // default dark mode

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio-website/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)