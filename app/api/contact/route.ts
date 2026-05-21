import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const schema = z.object({
  nom:       z.string().min(2),
  telephone: z.string().min(10),
  email:     z.string().email(),
  travaux:   z.string().min(1),
  message:   z.string().min(10).max(2000),
})

const labels: Record<string, string> = {
  interieure:  'Peinture intérieure',
  exterieure:  'Peinture extérieure & ravalement',
  enduits:     'Enduits et préparation',
  revetements: 'Pose de revêtements',
  autre:       'Autre / Non défini',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#C4956A;border-bottom:3px solid #C4956A;padding-bottom:12px;margin-bottom:24px">
          Nouvelle demande de devis — Yannick Décors
        </h2>
        <table style="width:100%;border-collapse:collapse">
          ${[
            ['Nom', data.nom],
            ['Téléphone', `<a href="tel:${data.telephone}">${data.telephone}</a>`],
            ['Email', `<a href="mailto:${data.email}">${data.email}</a>`],
            ['Travaux', labels[data.travaux] || data.travaux],
          ]
            .map(([k, v], i) => `
              <tr style="background:${i % 2 ? '#f9f8f5' : 'white'}">
                <td style="padding:10px 12px;font-weight:600;color:#6B6F7A;width:130px">${k} :</td>
                <td style="padding:10px 12px">${v}</td>
              </tr>
            `)
            .join('')}
          <tr>
            <td style="padding:10px 12px;font-weight:600;color:#6B6F7A;vertical-align:top">Message :</td>
            <td style="padding:10px 12px;white-space:pre-wrap">${data.message}</td>
          </tr>
        </table>
        <p style="margin-top:32px;font-size:12px;color:#9CA0AB">
          Envoyé depuis yannickdecors.netlify.app
        </p>
      </div>
    `

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })
      await transport.sendMail({
        from:    `"Yannick Décors Site" <${process.env.SMTP_USER}>`,
        to: 'leoinfluenceagency@gmail.com',
        replyTo: data.email,
        subject: `Devis — ${data.nom} — ${labels[data.travaux] || data.travaux}`,
        html,
      })
    } else {
      console.log('[Contact] SMTP non configuré. Données reçues :', data)
    }

    return NextResponse.json({
      success: true,
      message: 'Votre message a bien été envoyé. Je vous recontacterai sous 48h.',
    })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: err.flatten().fieldErrors }, { status: 422 })
    }
    console.error('[Contact] Erreur :', err)
    return NextResponse.json(
      { success: false, message: 'Une erreur est survenue. Appelez directement au 06 22 74 07 67.' },
      { status: 500 }
    )
  }
}
