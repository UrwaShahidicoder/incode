import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Email,
  Phone,
  LocationOn,
  Code,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '/services' },
        { label: 'Mobile Apps', href: '/services' },
        { label: 'Cloud Solutions', href: '/services' },
        { label: 'Consulting', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Projects', href: '/projects' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Support', href: '/support' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: 'https://facebook.com/softwarehouse', label: 'Facebook' },
    { icon: <Twitter />, href: 'https://twitter.com/softwarehouse', label: 'Twitter' },
    { icon: <LinkedIn />, href: 'https://linkedin.com/company/softwarehouse', label: 'LinkedIn' },
    { icon: <GitHub />, href: 'https://github.com/softwarehouse', label: 'GitHub' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e293b',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Code sx={{ mr: 1, fontSize: 28, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Software House
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)' }}>
              Building amazing digital experiences with cutting-edge technology.
              We transform ideas into powerful software solutions.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1, fontSize: 18 }} />
                <Typography variant="body2">
                  contact@softwarehouse.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1, fontSize: 18 }} />
                <Typography variant="body2">
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 1, fontSize: 18 }} />
                <Typography variant="body2">
                  123 Tech Street, Silicon Valley, CA 94000
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    component={RouterLink}
                    to={link.href}
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      mb: 1,
                      '&:hover': {
                        color: 'primary.main',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            © {currentYear} Software House. All rights reserved.
          </Typography>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 1, mt: { xs: 2, md: 0 } }}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
                aria-label={social.label}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
