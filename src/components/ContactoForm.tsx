import { useState } from 'react'

interface FormState {
  nombre: string
  email: string
  tipo: string
  mensaje: string
  privacidad: boolean
}

interface FormErrors {
  nombre?: string
  email?: string
  mensaje?: string
  privacidad?: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClass = `w-full bg-[#f0f0ee] border border-[#E0E0DE] rounded-lg text-[16px] px-3.5 py-2.5 outline-none transition-all duration-200`
const inputFocusStyle = { boxShadow: '0 0 0 1px #FF5500', borderColor: '#FF5500' }

export default function ContactoForm() {
  const [form, setForm] = useState<FormState>({
    nombre: '', email: '', tipo: '', mensaje: '', privacidad: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  function validateField(name: keyof FormState, value: string | boolean): string | undefined {
    if (name === 'nombre') return !value ? 'El nombre es obligatorio' : undefined
    if (name === 'email') {
      if (!value) return 'El email es obligatorio'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)) return 'Email inválido'
    }
    if (name === 'mensaje') return !value ? 'El mensaje es obligatorio' : undefined
    if (name === 'privacidad') return !value ? 'Debes aceptar la política de privacidad' : undefined
    return undefined
  }

  function handleBlur(name: keyof FormState) {
    const error = validateField(name, form[name])
    setErrors(prev => ({ ...prev, [name]: error }))
    setFocusedField(null)
  }

  function handleChange(name: keyof FormState, value: string | boolean) {
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: FormErrors = {}
    ;(Object.keys(form) as (keyof FormState)[]).forEach(k => {
      const err = validateField(k, form[k])
      if (err) newErrors[k as keyof FormErrors] = err
    })
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldStyle = (name: string) =>
    focusedField === name ? { ...inputFocusStyle } : {}

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl p-7 sm:p-8"
      style={{ background: 'var(--bg-surface)' }}
    >
      {/* Name + Email */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="nombre" className="block text-[15px] font-medium mb-1.5" style={{ color: 'var(--color-700)' }}>
            Nombre *
          </label>
          <input
            id="nombre"
            type="text"
            value={form.nombre}
            onChange={e => handleChange('nombre', e.target.value)}
            onFocus={() => setFocusedField('nombre')}
            onBlur={() => handleBlur('nombre')}
            className={inputClass}
            style={fieldStyle('nombre')}
            placeholder="Tu nombre"
            required
          />
          {errors.nombre && <p className="text-[14px] text-red-500 mt-1">{errors.nombre}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-[15px] font-medium mb-1.5" style={{ color: 'var(--color-700)' }}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={e => handleChange('email', e.target.value)}
            onFocus={() => setFocusedField('email')}
            onBlur={() => handleBlur('email')}
            className={inputClass}
            style={fieldStyle('email')}
            placeholder="tu@email.com"
            required
          />
          {errors.email && <p className="text-[14px] text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Type */}
      <div className="mb-4">
        <label htmlFor="tipo" className="block text-[15px] font-medium mb-1.5" style={{ color: 'var(--color-700)' }}>
          Tipo de proyecto
        </label>
        <select
          id="tipo"
          value={form.tipo}
          onChange={e => handleChange('tipo', e.target.value)}
          className={inputClass}
        >
          <option value="">Selecciona una opción</option>
          <option value="prototipo">Prototipo rápido</option>
          <option value="funcional">Pieza funcional</option>
          <option value="produccion">Producción en serie</option>
          <option value="figura">Figura o decoración</option>
          <option value="industrial">Proyecto industrial</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-4">
        <label htmlFor="mensaje" className="block text-[15px] font-medium mb-1.5" style={{ color: 'var(--color-700)' }}>
          Cuéntanos tu proyecto *
        </label>
        <textarea
          id="mensaje"
          rows={4}
          value={form.mensaje}
          onChange={e => handleChange('mensaje', e.target.value)}
          onFocus={() => setFocusedField('mensaje')}
          onBlur={() => handleBlur('mensaje')}
          className={inputClass}
          style={{ ...fieldStyle('mensaje'), resize: 'none' }}
          placeholder="Describe qué necesitas fabricar, dimensiones, materiales preferidos, cantidad..."
          required
        />
        {errors.mensaje && <p className="text-[14px] text-red-500 mt-1">{errors.mensaje}</p>}
      </div>

      {/* hCaptcha */}
      <div className="mb-4">
        {import.meta.env.PUBLIC_HCAPTCHA_SITE_KEY
        ? <div
            className="h-captcha"
            data-sitekey={import.meta.env.PUBLIC_HCAPTCHA_SITE_KEY}
            data-theme="light"
            />
        : null
        }
    </div>

      {/* Privacy checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={form.privacidad}
            onChange={e => handleChange('privacidad', e.target.checked)}
            onBlur={() => handleBlur('privacidad')}
            className="mt-0.5 accent-[#FF5500]"
          />
          <span className="text-[15px]" style={{ color: 'var(--color-500)' }}>
            Acepto la{' '}
            <a href="/privacidad" className="underline" style={{ color: 'var(--color-700)' }}>
              política de privacidad
            </a>
          </span>
        </label>
        {errors.privacidad && <p className="text-[14px] text-red-500 mt-1">{errors.privacidad}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 text-[16px] font-medium rounded-full px-5 py-2.5 transition-all duration-200"
        style={
          status === 'success'
            ? { background: '#059669', color: '#fff' }
            : status === 'error'
            ? { background: '#dc2626', color: '#fff' }
            : { background: '#FF5500', color: '#fff' }
        }
        onMouseEnter={e => {
          if (status === 'idle') (e.currentTarget as HTMLElement).style.background = '#E04D00'
        }}
        onMouseLeave={e => {
          if (status === 'idle') (e.currentTarget as HTMLElement).style.background = '#FF5500'
        }}
      >
        {status === 'sending' && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        )}
        {status === 'idle' && <>Enviar solicitud <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span></>}
        {status === 'sending' && 'Enviando...'}
        {status === 'success' && '¡Enviado correctamente!'}
        {status === 'error' && 'Error — inténtalo de nuevo'}
      </button>

      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {status === 'success' && 'Solicitud enviada correctamente.'}
        {status === 'error'   && 'Error al enviar. Por favor, inténtalo de nuevo.'}
      </div>
    </form>
  )
}
