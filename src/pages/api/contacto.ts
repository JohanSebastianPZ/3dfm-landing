import type { APIRoute } from 'astro'
import { Resend } from 'resend'

export const prerender = false

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json() as Record<string, unknown>
    const { nombre, email, tipo, mensaje } = body as {
      nombre?: string
      email?: string
      tipo?: string
      mensaje?: string
    }

    if (!nombre || !email || !mensaje) {
      return new Response(JSON.stringify({ error: 'Campos incompletos' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Email inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const { error } = await resend.emails.send({
      from: 'web@printlab3d.com',
      to: 'hola@printlab3d.com',
      subject: `Nuevo contacto: ${tipo ?? 'Sin tipo'} — ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo:</strong> ${tipo ?? '—'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    })

    if (error) {
      return new Response(JSON.stringify({ error: 'Error al enviar' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Error interno' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
