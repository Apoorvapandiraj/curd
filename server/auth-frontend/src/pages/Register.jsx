import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [msg, setMsg] = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)

  const API = (import.meta.env.VITE_API_URL || 'http://localhost:5001').replace(/\/+$/, '')

  const handle = async (e) => {
    e.preventDefault()
    setMsg({ text: '', type: '' })
    setLoading(true)
    try {
      const res = await axios.post(`${API}/api/auth/register`, form)
      if (res.data?.token) localStorage.setItem('token', res.data.token)
      if (res.data?.user) localStorage.setItem('user', JSON.stringify(res.data.user))
      setMsg({ text: `Registered — ${res.data.user?.email || ''}`, type: 'success' })
      setTimeout(() => window.location.hash = '#/home', 600)
    } catch (err) {
      const text = err?.response?.data?.message || err.message || 'Registration failed'
      setMsg({ text, type: 'error' })
    } finally { setLoading(false) }
  }

  return (
    <div className="auth-panel">
      <div>
        <div className="brand">Auth App</div>
        <p className="lead muted">Create your account to get started</p>
      </div>
      <form className="form" onSubmit={handle}>
        <label className="sr-only" htmlFor="reg-name">Name</label>
        <input id="reg-name" name="name" className="input" placeholder="Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />

        <label className="sr-only" htmlFor="reg-email">Email</label>
        <input id="reg-email" name="email" className="input" placeholder="Email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />

        <label className="sr-only" htmlFor="reg-password">Password</label>
        <input id="reg-password" name="password" className="input" placeholder="Password" type="password" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />

        <div className="auth-actions">
          <button className="btn" type="submit" disabled={loading} aria-busy={loading}>{loading ? <span className="spinner"/> : 'Register'}</button>
        </div>
      </form>
      {msg.text && <div className={`msg ${msg.type}`} style={{ marginTop: 10 }}>{msg.text}</div>}
    </div>
  )
}

