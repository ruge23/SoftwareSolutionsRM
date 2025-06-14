import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const emailData = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'LOGIN',
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      logger: true,
      debug: true
    });

    const info = await transporter.sendMail(emailData);
    
    console.log('Email enviado:', info.messageId);
    
    return new Response(JSON.stringify({ 
      success: true,
      messageId: info.messageId
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error completo:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal Server Error',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}