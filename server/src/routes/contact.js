import express from 'express';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form submission
router.post(
  '/',
  [
    body('name').trim().notEmpty().isLength({ min: 2, max: 50 }),
    body('email').isEmail().normalizeEmail(),
    body('subject').trim().notEmpty().isLength({ min: 5, max: 100 }),
    body('message').trim().notEmpty().isLength({ min: 10, max: 1000 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { name, email, subject, message } = req.body;

      // Email to site owner
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'urwa48391@gmail.com', // Updated to user's personal email
        subject: `Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 3px; border-left: 4px solid #007bff;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #666; font-size: 12px;">
              This message was sent from the Software House website contact form.
            </p>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);

      // Auto-reply to sender
      const autoReplyOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Software House',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #007bff;">Thank You for Reaching Out!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for contacting Software House. We have received your message and will get back to you within 24 hours.</p>
            <p>Here's a summary of your message:</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p>Best regards,<br>Software House Team</p>
          </div>
        `
      };

      await transporter.sendMail(autoReplyOptions);

      res.status(200).json({
        success: true,
        message: 'Message sent successfully! We will get back to you soon.'
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to send message. Please try again later.'
      });
    }
  }
);

// Get contact information
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: {
      email: process.env.CONTACT_EMAIL || 'contact@softwarehouse.com',
      phone: process.env.CONTACT_PHONE || '+1 (555) 123-4567',
      address:
        process.env.CONTACT_ADDRESS ||
        '123 Tech Street, Silicon Valley, CA 94000',
      social: {
        linkedin:
          process.env.LINKEDIN_URL ||
          'https://linkedin.com/company/softwarehouse',
        twitter:
          process.env.TWITTER_URL || 'https://twitter.com/softwarehouse',
        github:
          process.env.GITHUB_URL || 'https://github.com/softwarehouse'
      }
    }
  });
});

export default router;