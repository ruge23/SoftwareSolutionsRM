require('dotenv').config({ path: '.env.local' }); // Asegúrate de apuntar al archivo correcto

console.log("Verificando variables de entorno:");
console.log("EMAIL_USER:", process.env.EMAIL_USER ? "***" : "NO DEFINIDO");
console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "***" : "NO DEFINIDO");

const nodemailer = require('nodemailer');

// Configuración alternativa que funciona en más casos
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true para 465, false para otros puertos
  auth: {
    type: 'LOGIN',
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  logger: true, // Habilita logging
  debug: true // Habilita debug
});

async function sendTestEmail() {
  try {
    console.log("Intentando enviar email...");
    const info = await transporter.sendMail({
      from: `"Test Email" <${process.env.EMAIL_USER}>`,
      to: 'softwaresolutions@gmail.com',
      subject: 'Prueba de configuración',
      text: 'Esto es una prueba',
      html: '<b>Esto es una prueba HTML</b>',
    });
    console.log('✅ Email enviado:', info.messageId);
  } catch (error) {
    console.error('❌ Error completo:', error);
    console.error('Detalles técnicos:', error.response || error.stack);
  }
}

sendTestEmail();