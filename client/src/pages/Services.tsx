import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  Code,
  Smartphone,
  Cloud,
  Analytics,
  Security,
  Speed,
  CheckCircle,
  ArrowForward,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code sx={{ fontSize: 50 }} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: [
        'React & Next.js Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
        'Database Design',
        'Performance Optimization',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
      startingPrice: '$5,000',
    },
    {
      icon: <Smartphone sx={{ fontSize: 50 }} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS & Android Apps',
        'React Native Development',
        'Cross-platform Solutions',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality',
      ],
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
      startingPrice: '$8,000',
    },
    {
      icon: <Cloud sx={{ fontSize: 50 }} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: [
        'AWS & Azure Setup',
        'DevOps & CI/CD',
        'Microservices Architecture',
        'Container Orchestration',
        'Monitoring & Logging',
        'Auto-scaling Solutions',
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      startingPrice: '$3,000',
    },
    {
      icon: <Analytics sx={{ fontSize: 50 }} />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence.',
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Machine Learning',
        'Data Warehousing',
        'Real-time Analytics',
        'Custom Dashboards',
      ],
      technologies: ['Python', 'Tableau', 'Power BI', 'TensorFlow', 'SQL'],
      startingPrice: '$4,000',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business needs and project requirements.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed project plan with timelines and milestones.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your solution using agile development practices.',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Comprehensive testing ensures quality and reliability.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'We deploy your solution and provide ongoing support.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #141e33ff 0%, #1d4ed8 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" sx={{ mb: 4, fontWeight: 700 }}>
              Our Services
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 700, mx: 'auto' }}>
              Comprehensive software development services to bring your ideas to life
              with cutting-edge technology and expert craftsmanship.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ color: 'primary.main', mb: 3 }}>
                        {service.icon}
                      </Box>
                      <Typography variant="h4" sx={{ mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                        {service.description}
                      </Typography>

                      <Typography variant="h6" sx={{ mb: 2 }}>
                        What's Included:
                      </Typography>
                      <List dense>
                        {service.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircle color="primary" sx={{ fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>

                      <Box sx={{ mt: 3, mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {service.technologies.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              color="primary"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </Box>

                      <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                        Starting from {service.startingPrice}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForward />}
                      >
                        Get Quote
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
           <Typography
  variant="h2"
  sx={{ mb: 2, color: '#155cc7ff' }}
>
  Our Process
</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              We follow a proven development process to ensure successful project delivery.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h2"
                      color="primary"
                      sx={{ fontWeight: 700, mb: 2 }}
                    >
                      {step.step}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{ mb: 4 }}>
              Ready to Start Your Project?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
              Let's discuss your requirements and create a custom solution that fits your needs and budget.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{ px: 6, py: 2 }}
            >
              Get Free Consultation
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
