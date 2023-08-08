import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";
import { ContextProvider } from "./context/Context";
import { getGifs, getGifsByName, scrollToTopSmooth } from "./controllers/functions";

const provider = {
  getGifs, getGifsByName, scrollToTopSmooth
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <ContextProvider value={provider}>
      <App />
    </ContextProvider>
  </ThemeProvider>
)
