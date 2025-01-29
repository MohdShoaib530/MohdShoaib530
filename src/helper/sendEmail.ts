import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Send email using Resend
    await resend.emails.send({
      from: email, // Use the sender's email for the "from" field
      to: 'mohdshoaib91530@gmail.com', // Replace with your desired recipient email
      subject: 'Contact Form Submission',
      html: `<p><strong>${name}</strong> sent you a message:</p><p>${message}</p>`,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
