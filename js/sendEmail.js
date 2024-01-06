const sendEmail = async () => {
    const data = {
      to: 'destinatario@example.com',
      from: 'remitente@example.com',
      subject: 'Asunto del correo',
      text: 'Este es el contenido del correo.'
    };
  
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer YOUR_SENDGRID_API_KEY'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        console.log('Correo enviado exitosamente');
      } else {
        console.error('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };
  
  sendEmail();
  