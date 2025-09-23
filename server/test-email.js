import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('Testing email configuration...');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');

if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Test the connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('Email configuration error:', error.message);
    } else {
      console.log('✅ Email configuration is correct!');
      console.log('✅ Server can send emails successfully!');
    }
  });
} else {
  console.log('❌ Environment variables not set properly');
}
