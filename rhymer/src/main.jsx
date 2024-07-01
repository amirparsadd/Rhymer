import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import BackgroundParticlesComponent from './components/BackgroundParticle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundParticlesComponent/>
    <App />
  </React.StrictMode>,
)
