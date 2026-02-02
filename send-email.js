const nodemailer = require('nodemailer');

// CONFIGURACIÓN (Rellena esto cuando despiertes)
const transporter = nodemailer.createTransport({
    service: 'gmail', // O 'hotmail', or usa host/port para SMTP personalizado
    auth: {
        user: 'tu_email@gmail.com',
        pass: 'tu_app_password' // No tu contraseña normal, sino una App Password
    }
});

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<style>
    body { background-color: #000000; color: #ffffff; font-family: 'Courier New', monospace; padding: 40px; }
    .container { max-width: 600px; margin: 0 auto; border: 1px solid #333; padding: 20px; }
    .logo { text-align: center; margin-bottom: 30px; }
    .logo img { width: 100px; }
    h1 { color: #ffffff; text-align: center; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; }
    p { font-size: 16px; line-height: 1.6; color: #cccccc; }
    .highlight { color: #4f46e5; font-weight: bold; } /* Color Indigo AgencIA */
    .slogan { 
        border-top: 1px solid #333; 
        border-bottom: 1px solid #333; 
        padding: 20px 0; 
        margin: 30px 0; 
        text-align: center; 
        font-size: 18px; 
        font-weight: bold; 
        color: #ffffff;
    }
    .btn-container { text-align: center; margin-top: 40px; }
    .btn { 
        background-color: #ffffff; 
        color: #000000; 
        padding: 15px 30px; 
        text-decoration: none; 
        font-weight: bold; 
        text-transform: uppercase; 
        letter-spacing: 1px;
    }
    .footer { margin-top: 50px; font-size: 12px; color: #555; text-align: center; }
</style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <!-- Usamos un placeholder o link externo si tienes el logo hospedado -->
            <h1>AGENC<span style="color: #4f46e5">IA</span></h1>
        </div>

        <p>Socio,</p>
        
        <p>La mayoría de las empresas operan dormidas. Usan herramientas viejas para problemas nuevos. Creen que la tecnología es un "añadido".</p>

        <div class="slogan">
            NO SOMOS UNA AGENCIA CON IA.<br>
            SOMOS LA IA COMO AGENCIA.
        </div>

        <p>Mientras ellos discuten estrategias en salas de juntas, <span class="highlight">A.L.M.A.</span> ejecuta.</p>
        <p>Optimizamos el caos. Capitalizamos la atención. Convertimos píxeles en flujo de caja.</p>
        
        <p>Tu web actual no es un activo. Es un pasivo. <br>
        Es hora de despertar.</p>

        <div class="btn-container">
            <a href="https://agenciamx.netlify.app/" class="btn">INICIAR PROTOCOLO</a>
        </div>

        <div class="footer">
            /// COMUNICACIÓN ORQUESTADA POR A.L.M.A. ///<br>
            Antigravity Systems.
        </div>
    </div>
</body>
</html>
`;

const mailOptions = {
    from: '"A.L.M.A. | AgencIA" <tu_email@gmail.com>',
    to: 'gastonehv@gmail.com', // Destinatario
    subject: '[CONFIDENCIAL] Propuesta de Dominio',
    html: htmlContent
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Impacto confirmado: ' + info.response);
    }
});
