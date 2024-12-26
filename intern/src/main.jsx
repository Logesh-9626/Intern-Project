import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserRegProvider } from '../Context/NameContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserRegProvider>
      <Router>
      <App/>
      </Router>
    </UserRegProvider>
 
  </StrictMode>,
)
