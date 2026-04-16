import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { nom, email, telephone, service, message } = await request.json();

    await resend.emails.send({
      from: "ClimPro Services <onboarding@resend.dev>",
      to: "nadji.fali@gmail.com",
      subject: `Nouvelle demande de devis — ${nom}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Service :</strong> ${service || "Non précisé"}</p>
        <p><strong>Message :</strong><br/>${message || "Aucun message"}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
