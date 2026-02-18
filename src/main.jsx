import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './components/Profile.jsx'
import State from './components/State.jsx'
import User from './User.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <Profile />
    // <State />
  <User />
  // </StrictMode>,
)
