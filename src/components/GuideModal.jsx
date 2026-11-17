import { useCallback, useEffect, useRef, useState } from 'react'
import { track } from '../lib/analytics'
import Brandmark from './Brandmark'
import PhoneForm from './PhoneForm'
import { Check, Close } from './Icons'

// Gates a PDF guide behind the lead form. Once the visitor submits their
// details, the download is revealed. Reuses the shared .modal styles.
export default function GuideModal({ guide, onClose }) {
  const dialogRef = useRef(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prevFocus = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus({ preventScroll: true })

    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab') return
      const focusables = dialogRef.current.querySelectorAll('button, input, a[href]')
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      prevFocus?.focus?.()
    }
  }, [onClose])

  const handleDownload = useCallback(() => {
    track('resource_download', { title: guide.title, slug: guide.slug })
  }, [guide])

  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="guide-title" ref={dialogRef} tabIndex={-1}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <Close />
        </button>
        <div className="modal__art" aria-hidden="true">
          <Brandmark animated />
          <span className="modal__guide-badge">
            <span className="modal__guide-badge__star">✦</span> Free PDF guide
          </span>
        </div>
        <div className="modal__body">
          {!done ? (
            <>
              <p className="eyebrow">Get the guide</p>
              <h2 id="guide-title">{guide.title}</h2>
              <p className="modal__lead">
                Share your details and we’ll open your free copy of “{guide.title}”.
                You’ll also get helpful menopause resources from us. You can opt out anytime.
              </p>
              <PhoneForm source={`learn-guide:${guide.slug}`} compact guide onDone={() => setDone(true)} />
            </>
          ) : (
            <div className="guide-ready" role="status">
              <span className="form-success__icon"><Check /></span>
              <h2 id="guide-title">Your guide is ready.</h2>
              <p className="modal__lead">
                Thank you! Tap below to open “{guide.title}”. It opens in a new tab,
                so you can read it now or save it for later.
              </p>
              <a
                className="btn btn--primary btn--block"
                href={guide.file}
                target="_blank"
                rel="noreferrer"
                onClick={handleDownload}
              >
                Download “{guide.title}”
              </a>
              <button className="modal__later" onClick={onClose}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
