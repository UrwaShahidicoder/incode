import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Person,
  Code,
  Lightbulb,
  TrendingUp,
  Star,
  Group,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: '15+ years of experience in software development.',
      image: '/images/team/ceo-image1.jpg',
      skills: ['Leader', 'Strategy', 'Innovation'],
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Expert in scalable architectures and modern technology stacks.',
      image: '/images/team/image2.jpg',
      skills: ['Architecture', 'DevOps', 'Cloud'],
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about user experiences.',
      image: '/images/team/image3.jpg',
      skills: ['React', 'Node.js', 'TypeScript'],
    },
    {
      name: 'james Wilson',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design.',
      image: '/images/team/image4.jpg',
      skills: ['Design', 'UX', 'Accessibility'],
    },
  ];

  const values = [
    {
      icon: <Lightbulb sx={{ fontSize: 40 }} />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies & create solutions to solve complex problems.',
    },
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Quality',
      description: 'We maintain the highest standards in code quality, testing, and documentation.',
    },
    {
      icon: <Group sx={{ fontSize: 40 }} />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'Growth',
      description: 'We help our clients grow their businesses through technology and innovation.',
    },
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
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
              About Incode
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 700, mx: 'auto' }}>
              We're a passionate team of developers, designers, and innovators
              dedicated to creating exceptional digital experiences.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Story Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h3" sx={{ mb: 4 }}>
                  Our Story
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Founded in 2019, Software House began with a simple mission: to bridge the gap
                  between innovative ideas and exceptional digital solutions. What started as a
                  small team of passionate developers has grown into a full-service software
                  development company trusted by businesses worldwide.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  We believe that great software is built by great people. That's why we focus
                  on fostering a culture of collaboration, continuous learning, and innovation.
                  Every project we undertake is an opportunity to push boundaries and deliver
                  solutions that truly make a difference.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src="images\team\team.webp"
                  alt="Our team at work"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Our Values
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              The principles that guide everything we do and shape our approach to software development.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center' }}>
                    <CardContent sx={{ pt: 4 }}>
                      <Box sx={{ color: 'primary.main', mb: 2 }}>
                        {value.icon}
                      </Box>
                      <Typography variant="h5" sx={{ mb: 2 }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Meet Our Team
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              The talented individuals behind our success, working together to deliver exceptional results.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center' }}>
                    <CardContent>
                      <Avatar
                        src={member.image}
                        sx={{
                          width: 80,
                          height: 80,
                          mx: 'auto',
                          mb: 2,
                          bgcolor: 'primary.main',
                        }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {member.bio}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                        {member.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
