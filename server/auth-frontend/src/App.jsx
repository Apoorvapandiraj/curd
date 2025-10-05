import React, { useState, useEffect } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

export default function App() {
  const [route, setRoute] = useState(window.location.hash.replace('#','') || '/')

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#','') || '/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === '/home' || route === 'home') return <Home />

  return (
    <div className="app-shell">
      <div className="card fade-in">
        <div className="panel" style={{ width: '100%' }}>
          <div className="brand" style={{ textAlign: 'center' }}>Auth Portal</div>
          <p className="lead muted" style={{ textAlign: 'center' }}>Black & Gold Edition ✨</p>
          <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            <div style={{ width: 320 }}>
              <h2 style={{ color: '#d4af37' }}>Register</h2>
              <Register />
            </div>
            <div style={{ width: 320 }}>
              <h2 style={{ color: '#d4af37' }}>Login</h2>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}