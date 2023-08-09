import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";
import { ContextProvider } from "./context/Context";
import { getGifsByName, getNextGifs, scrollToTopSmooth } from "./controllers/functions";

const provider = {
  getGifsByName, getNextGifs, scrollToTopSmooth
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <ContextProvider value={provider}>
      <App />
    </ContextProvider>
  </ThemeProvider>
)
