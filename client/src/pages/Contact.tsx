import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button, IconButton, Alert, CircularProgress } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage on input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    localStorage.setItem('contactFormData', JSON.stringify(updatedData));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        localStorage.removeItem('contactFormData');
      } else {
        setError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box sx={{ background: 'linear-gradient(135deg, #141e33ff  0%, #1d4ed8 100%)', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h1" sx={{ mb: 4, fontWeight: 700 }}>Contact Us</Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 700, mx: 'auto' }}>
              Ready to start your project? Get in touch with our team and let's discuss how we can help.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <Typography variant="h3" sx={{ mb: 4 }}>Get In Touch</Typography>
                <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem' }}>
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Email sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h6">contact@softwarehouse.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Phone sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h6">+1 (555) 123-4567</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h6">123 Tech Street, Silicon Valley, CA 94000</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ mb: 4 }}>Send us a message</Typography>
                    {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={loading ? <CircularProgress size={20} /> : <Send />}
                        disabled={loading}
                        sx={{ mt: 2 }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
