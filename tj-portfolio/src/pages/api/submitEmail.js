import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, subject, message } = req.body;

  const content = {
    to: 'tim@webdevtj.com',
    from: 'tim@webdevtj.com',
    reply_to: email,
    subject: `New message from ${name} at ${email}: ${subject}`,
    text: message,
  };
  try {
    await sgMail.send(content);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error response:', error.response?.body);
    res.status(500).json({ error: 'Error sending email' });
  }
}
