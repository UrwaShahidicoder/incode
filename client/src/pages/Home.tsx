import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Avatar,
  IconButton,
} from '@mui/material';
import {
  Code,
  Smartphone,
  Cloud,
  Analytics,
  ArrowForward,
  CheckCircle,
  Star,
  NavigateBefore,
  NavigateNext,
  People,
  TrendingUp,
  Speed,
  Security,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/material/styles';

// Floating background elements
const FloatingShape = styled(motion.div)({
  position: 'absolute',
  borderRadius: '50%',
  background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.1))',
  pointerEvents: 'none',
  zIndex: 0,
});

// Animated counter component
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({
  end,
  duration = 2,
  suffix = ''
}) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      const timer = setInterval(() => {
        setCount(prevCount => {
          const increment = end / (duration * 60); // 60 FPS
          const nextCount = prevCount + increment;
          if (nextCount >= end) {
            clearInterval(timer);
            return end;
          }
          return nextCount;
        });
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
        {Math.floor(count).toLocaleString()}{suffix}
      </Typography>
    </motion.div>
  );
};

// Testimonials carousel component
const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Outstanding work! The team delivered our e-commerce platform ahead of schedule with exceptional quality. Highly recommended!",
      rating: 5,
      avatar: "https://via.placeholder.com/80x80"
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      content: "Professional, reliable, and innovative. They transformed our legacy system into a modern, scalable solution.",
      rating: 5,
      avatar: "https://via.placeholder.com/80x80"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, GreenTech",
      content: "Amazing attention to detail and excellent communication throughout the project. Our mobile app exceeded expectations!",
      rating: 5,
      avatar: "https://via.placeholder.com/80x80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ position: 'relative', py: 4 }}>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ maxWidth: 600, mx: 'auto', p: 3, textAlign: 'center' }}>
          <Avatar
            src={testimonials[currentIndex].avatar}
            sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
          />
          <Box sx={{ mb: 2 }}>
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} sx={{ color: '#ffc107' }} />
            ))}
          </Box>
          <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
            "{testimonials[currentIndex].content}"
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {testimonials[currentIndex].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonials[currentIndex].role}
          </Typography>
        </Card>
      </motion.div>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
        <IconButton onClick={prevTestimonial} sx={{ color: 'primary.main' }}>
          <NavigateBefore />
        </IconButton>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'primary.main' : 'grey.300',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <IconButton onClick={nextTestimonial} sx={{ color: 'primary.main' }}>
          <NavigateNext />
        </IconButton>
      </Box>
    </Box>
  );
};

// Featured projects carousel
const FeaturedProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Modern React-based e-commerce with payment integration",
      image: "/images/projects/ecommerce-app.jpg",
      technologies: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Task Management App",
      description: "Collaborative workspace with real-time updates",
      image: "/images/projects/task-management.webp",
      technologies: ["React", "Firebase", "Material-UI"]
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence with interactive visualizations",
      image: "/images/projects/analytics-dashboards-.png",
      technologies: ["React", "D3.js", "Python"]
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextProject, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ position: 'relative', py: 4 }}>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ maxWidth: 500, mx: 'auto', overflow: 'hidden' }}>
          <Box
            component="img"
            src={featuredProjects[currentIndex].image}
            alt={featuredProjects[currentIndex].title}
            sx={{ width: '100%', height: 250, objectFit: 'cover' }}
          />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {featuredProjects[currentIndex].title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {featuredProjects[currentIndex].description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
              {featuredProjects[currentIndex].technologies.map((tech, index) => (
                <Chip key={index} label={tech} size="small" variant="outlined" />
              ))}
            </Box>
          </CardContent>
        </Card>
      </motion.div>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
        <IconButton onClick={prevProject} sx={{ color: 'primary.main' }}>
          <NavigateBefore />
        </IconButton>
        {featuredProjects.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'primary.main' : 'grey.300',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <IconButton onClick={nextProject} sx={{ color: 'primary.main' }}>
          <NavigateNext />
        </IconButton>
      </Box>
    </Box>
  );
};

const Home: React.FC = () => {
  const services = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies.',
    },
    {
      icon: <Smartphone sx={{ fontSize: 40 }} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: <Cloud sx={{ fontSize: 40 }} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
    },
    {
      icon: <Analytics sx={{ fontSize: 40 }} />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
    },
  ];

  const features = [
    'Agile Development Process',
    '24/7 Support & Maintenance',
    'Scalable Architecture',
    'Security First Approach',
    'Performance Optimization',
    'Modern Tech Stack',
  ];

  const stats = [
    { number: 150, suffix: '+', label: 'Projects Completed' },
    { number: 50, suffix: '+', label: 'Happy Clients' },
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 99, suffix: '%', label: 'Client Satisfaction' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Floating Background Elements */}
      <FloatingShape
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          width: 100,
          height: 100,
          top: '10%',
          right: '10%',
        }}
      />
      <FloatingShape
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          width: 60,
          height: 60,
          top: '60%',
          left: '5%',
        }}
      />
      <FloatingShape
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          width: 80,
          height: 80,
          bottom: '20%',
          right: '20%',
        }}
      />

      {/* Banner Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '70vh' },
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundImage: `url(/programming-code-coding-hacker-background-programming-code-icon-made-with-binary-code_127544-815.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                textAlign: 'center',
                mb: 4,
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontSize: { xs: '2.5rem', md: '4rem' }
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Welcome to
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 200
                }}
                style={{
                  background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientShift 3s ease-in-out infinite'
                }}
              >
                Incode
              </motion.span>
            </Typography>
          </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  mb: 6,
                  opacity: 0.95,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  fontSize: { xs: '1.2rem', md: '1.8rem' }
                }}
              >
                Transforming Ideas into Digital Reality
              </Typography>
            </motion.div>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: 'white',
                    px: 4,
                    py: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Our Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 2,
                    '&:hover': {
                      borderColor: '#fbbf24',
                      backgroundColor: 'rgba(251, 191, 36, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </Box>
        </Container>
      </Box>

        {/* Animated floating elements */}
        <FloatingShape
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            width: 120,
            height: 120,
            top: '20%',
            left: '10%',
            background: 'linear-gradient(45deg, rgba(251, 191, 36, 0.2), rgba(37, 99, 235, 0.2))',
            zIndex: 1,
          }}
        />
        <FloatingShape
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            width: 80,
            height: 80,
            bottom: '25%',
            right: '15%',
            background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.15), rgba(251, 191, 36, 0.15))',
            zIndex: 1,
          }}
        />



      {/* Stats Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
              Our Impact in Numbers
            </Typography>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      <Typography variant="h6" sx={{ mt: 1, color: 'text.secondary' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h2" sx={{ mb: 2 }}>
                Our Services
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                We offer comprehensive software development services to help your business thrive in the digital world.
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, pt: 4 }}>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Box sx={{ color: 'primary.main', mb: 2 }}>
                            {service.icon}
                          </Box>
                        </motion.div>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                          {service.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {service.description}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            component={Link}
                            to="/services"
                            size="small"
                            endIcon={<ArrowForward />}
                          >
                            Learn More
                          </Button>
                        </motion.div>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 2 }}>
              What Our Clients Say
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
              Don't just take our word for it - hear from our satisfied clients
            </Typography>
            <TestimonialsCarousel />
          </motion.div>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 2 }}>
              Featured Projects
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
              A glimpse of our recent work and success stories
            </Typography>
            <FeaturedProjectsCarousel />
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h3" sx={{ mb: 4 }}>
                  Why Choose Us?
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                  With years of experience in software development, we deliver high-quality
                  solutions that exceed expectations. Our team of experts uses cutting-edge
                  technologies to build scalable and secure applications.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Chip
                        icon={<CheckCircle />}
                        label={feature}
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 1 }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src="images\projects\banner section.jpg"
                  alt="Team collaboration"
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

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ mb: 4 }}>
              Ready to Start Your Project?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
              Let's discuss how we can help bring your ideas to life with our expertise
              and innovative solutions.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{ px: 6, py: 2 }}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
