import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from '@mui/icons-material';

const NotFound: React.FC = () => {
  return (
    <Box sx={{ minHeight: '70vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" sx={{ fontSize: '8rem', fontWeight: 700, color: 'primary.main', mb: 2 }}>
            404
          </Typography>
          <Typography variant="h3" sx={{ mb: 4 }}>
            Page Not Found
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 6, maxWidth: 500, mx: 'auto' }}>
            Sorry, the page you are looking for doesn't exist or has been moved.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            startIcon={<Home />}
            sx={{ px: 6, py: 2 }}
          >
            Go Home
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default NotFound;
