import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { MusicProvider,useMusic } from './component/MusicContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <MusicProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </MusicProvider>
);
