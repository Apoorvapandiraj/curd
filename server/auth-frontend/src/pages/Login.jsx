import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [msg, setMsg] = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)

  const API = (import.meta.env.VITE_API_URL || 'http://localhost:5001').replace(/\/+$/, '')

  const handle = async (e) => {
    e.preventDefault()
    setMsg({ text: '', type: '' })
    setLoading(true)
    try {
      const res = await axios.post(`${API}/api/auth/login`, form)
      if (res.data?.token) localStorage.setItem('token', res.data.token)
      if (res.data?.user) localStorage.setItem('user', JSON.stringify(res.data.user))
      setMsg({ text: `Welcome back — ${res.data.user?.email || ''}`, type: 'success' })
      setTimeout(() => window.location.hash = '#/home', 600)
    } catch (err) {
      const text = err?.response?.data?.message || err.message || 'Login failed'
      setMsg({ text, type: 'error' })
    } finally { setLoading(false) }
  }

  return (
    <div className="auth-panel">
      <div>
        <div className="brand">Welcome Back</div>
        <p className="lead muted">Sign in to your account</p>
      </div>
      <form className="form" onSubmit={handle}>
        <label className="sr-only" htmlFor="login-email">Email</label>
        <input id="login-email" name="email" className="input" placeholder="Email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />

        <label className="sr-only" htmlFor="login-password">Password</label>
        <input id="login-password" name="password" className="input" placeholder="Password" type="password" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />

        <div className="auth-actions">
          <button className="btn" type="submit" disabled={loading} aria-busy={loading}>{loading ? <span className="spinner"/> : 'Login'}</button>
        </div>
      </form>
      {msg.text && <div className={`msg ${msg.type}`} style={{ marginTop: 10 }}>{msg.text}</div>}
    </div>
  )
}
