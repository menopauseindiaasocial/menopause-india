
import { track } from './analytics'

// Sends form submissions to the Vercel API
export async function submitForm(type, data) {
  const payload = {
    type,
    ...data,
    page: window.location.pathname,
    submittedAt: new Date().toISOString(),
  }

  track('generate_lead', { form_type: type })

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Form submission failed.')
  }

  return result
}

// Indian mobile numbers: 10 digits starting 6–9
export function normaliseIndianMobile(value) {
  const digits = value.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '')
  return /^[6-9]\d{9}$/.test(digits) ? digits : null
}

export const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
