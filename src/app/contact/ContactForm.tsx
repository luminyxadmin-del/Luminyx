"use client";

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ fullName: '', workEmail: '', organisation: '', howCanWeHelp: 'Partnership inquiry', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) setSubmitted(true)
      else {
        const data = await res.json()
        setError(data?.error || 'Submission failed')
      }
    } catch (err: any) {
      setError(err.message || 'Submission failed')
    }
    setSubmitting(false)
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
      <h2 className="font-display text-xl font-bold text-ink mb-1">Send a message</h2>
      <p className="text-sm text-ink-muted mb-6">Fill in the form and we&apos;ll get back to you within one business day.</p>

      {submitted ? (
        <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800">Thanks — your message has been received.</div>
      ) : (
        <>
          {error && <div className="mb-4 p-3 rounded bg-red-50 border border-red-100 text-red-700">{error}</div>}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs font-medium text-ink-muted mb-1.5 block">Full Name</label>
              <input value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} type="text" placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand" />
            </div>
            <div>
              <label className="text-xs font-medium text-ink-muted mb-1.5 block">Work Email</label>
              <input value={formData.workEmail} onChange={e => setFormData({ ...formData, workEmail: e.target.value })} type="email" placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand" />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-xs font-medium text-ink-muted mb-1.5 block">Organisation</label>
            <input value={formData.organisation} onChange={e => setFormData({ ...formData, organisation: e.target.value })} type="text" placeholder="Your company or institution"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand" />
          </div>

          <div className="mb-4">
            <label className="text-xs font-medium text-ink-muted mb-1.5 block">How can we help?</label>
            <select value={formData.howCanWeHelp} onChange={e => setFormData({ ...formData, howCanWeHelp: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand bg-white">
              <option>Partnership inquiry</option>
              <option>Talent — hiring</option>
              <option>Talent — looking for opportunities</option>
              <option>Travel</option>
              <option>Education Advisory program</option>
              <option>Press &amp; media</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="text-xs font-medium text-ink-muted mb-1.5 block">Your Message</label>
            <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={5} placeholder="A short paragraph is more than enough."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-brand/20 focus:border-primary-brand resize-none" />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <button type="button" className="text-sm text-ink-muted flex items-center gap-2 hover:text-ink transition-colors">
              Attach a file
            </button>
            <button onClick={handleSubmit} disabled={submitting} type="button" className="btn-primary">
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
