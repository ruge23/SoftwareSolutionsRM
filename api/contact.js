import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, companyName, organizationType, message } = req.body;

    // Configurar el transporter (usa tu propio servicio de email o SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // tu email
        pass: process.env.EMAIL_PASSWORD, // tu contraseña o app password
      },
    });

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'softwaresolutions@gmail.com', // El email de destino
      subject: `Nuevo mensaje de contacto de ${firstName} ${lastName}`,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Empresa:</strong> ${companyName || 'No proporcionada'}</p>
        <p><strong>Tipo de organización:</strong> ${organizationType || 'No especificado'}</p>
        <h2>Mensaje:</h2>
        <p>${message}</p>
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}