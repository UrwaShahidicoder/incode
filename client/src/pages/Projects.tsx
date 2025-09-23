import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Tabs,
  Tab,
  CardMedia,
} from '@mui/material';
import { Launch, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Projects: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js featuring payment integration, inventory management, and admin dashboard.',
      image: "/images/projects/ecommerce-app.jpg",
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      category: 'Web Development',
      status: 'Completed',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: '/images/project2.jpg',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      category: 'Web Development',
      status: 'In Progress',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and money transfer features.',
      image: '/images/project3.jpg',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
      category: 'Mobile Development',
      status: 'Completed',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for business intelligence with interactive charts and real-time data visualization.',
      image: '/images/project4.jpg',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'Data Analytics',
      status: 'Completed',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Analytics'];

  const filteredProjects = tabValue === 0
    ? projects
    : projects.filter(project => project.category === categories[tabValue]);

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
              Our Projects
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 700, mx: 'auto' }}>
              Explore our portfolio of successful projects and see how we've helped
              businesses transform their ideas into reality.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Filter Tabs */}
      <Box sx={{ py: 4, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTab-root': {
                fontSize: '1rem',
                fontWeight: 600,
                minWidth: 120,
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} md={6} key={project.id}>
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
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/projects/ecommerce-app.jpg"
                        alt={project.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ mb: 2 }}>
                          <Chip
                            label={project.status}
                            color={project.status === 'Completed' ? 'success' : 'warning'}
                            size="small"
                            sx={{ mb: 1 }}
                          />
                          {project.featured && (
                            <Chip
                              label="Featured"
                              color="primary"
                              size="small"
                              sx={{ ml: 1 }}
                            />
                          )}
                        </Box>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                        <Button
                          component="a"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<Launch />}
                          size="small"
                        >
                          Live Demo
                        </Button>
                        <Button
                          component="a"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<GitHub />}
                          size="small"
                        >
                          Code
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} md={6} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/projects/task-management.webp"
                        alt={project.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <Chip key={techIndex} label={tech} size="small" variant="outlined" />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                        <Button component="a" href={project.demoUrl} target="_blank" startIcon={<Launch />} size="small">
                          Live Demo
                        </Button>
                        <Button component="a" href={project.githubUrl} target="_blank" startIcon={<GitHub />} size="small">
                          Code
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} md={6} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image="/images/projects/mobile-banking app.jpg"
                        alt={project.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <Chip key={techIndex} label={tech} size="small" variant="outlined" />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                        <Button component="a" href={project.demoUrl} target="_blank" startIcon={<Launch />} size="small">
                          Live Demo
                        </Button>
                        <Button component="a" href={project.githubUrl} target="_blank" startIcon={<GitHub />} size="small">
                          Code
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} md={6} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        // done
                        image="/images/projects/analytics-dashboards-.png"
                        alt={project.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <Chip key={techIndex} label={tech} size="small" variant="outlined" />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                        <Button component="a" href={project.demoUrl} target="_blank" startIcon={<Launch />} size="small">
                          Live Demo
                        </Button>
                        <Button component="a" href={project.githubUrl} target="_blank" startIcon={<GitHub />} size="small">
                          Code
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Container>
      </Box>
    </Box>
  );
};

export default Projects;
