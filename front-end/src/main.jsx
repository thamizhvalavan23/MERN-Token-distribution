import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Appcontextprovider from './Appcontext/Appcontext.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Appcontextprovider>
<App />
</Appcontextprovider>
</BrowserRouter>

)
