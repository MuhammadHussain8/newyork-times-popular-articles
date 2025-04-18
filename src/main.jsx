import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ArticlesProvider } from "./context/ArticlesContext";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArticlesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ArticlesProvider>
  </StrictMode>,
)
