import React from 'react'

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.hash = '#/'
  }

  return (
    <div className="home-shell">
      <div className="home-card container">
        <div className="home-hero">
         <h1 style={{ margin: 0, color: '#d4af37' }}>
  Welcome{user ? `, ${user.name || user.email}` : ''}
</h1>
          {user && <p style={{ marginTop: 8 }}>Logged in as <strong>{user.email}</strong></p>}
        </div>
        <div className="home-actions">
          <button className="btn" onClick={() => window.location.hash = '#/'}>Go to Auth</button>
          <button className="btn-ghost" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}
