"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    setError('')

    if (!email || !password) {
      setError('Please enter both email and password.')
      setLoading(false)
      return
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message || 'Invalid credentials')
      setLoading(false)
      return
    }

    if (!data.session) {
      setError('Unable to sign in. Please try again.')
      setLoading(false)
      return
    }

    router.push('/admin')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0A2A' }}>
      <div style={{ background: '#ffffff', borderRadius: '1.5rem', padding: '3rem', width: '100%', maxWidth: '420px' }}>
        <img src="https://res.cloudinary.com/dtg3lepr4/image/upload/v1783954050/Luminyx_ventures_Final_dark_colour_logo_dnaccc.png"
          alt="Luminyx" style={{ height: '40px', marginBottom: '2rem' }} />
        
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
          Admin Login
        </h1>
        <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '2rem' }}>
          Luminyx Dashboard — Restricted Access
        </p>

        {error && (
          <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '12px', marginBottom: '1rem', color: '#DC2626', fontSize: '14px' }}>
            {error}
          </div>
        )}

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="admin@luminyx.io"
            style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #E5E7EB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            placeholder="••••••••"
            style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #E5E7EB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{ width: '100%', padding: '12px', background: '#6D28D9', color: '#ffffff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </div>
    </div>
  )
}
