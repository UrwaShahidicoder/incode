import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn how to build scalable and maintainable React applications using best practices and modern tools.',
      author: { name: 'John Doe', avatar: '/images/author1.jpg' },
      category: 'React',
      readTime: '5 min read',
      publishedAt: '2024-01-20',
      featured: true,
    },
    {
      id: 2,
      title: 'Node.js Performance Optimization Tips',
      excerpt: 'Discover essential techniques to optimize your Node.js applications for better performance.',
      author: { name: 'Jane Smith', avatar: '/images/author2.jpg' },
      category: 'Node.js',
      readTime: '7 min read',
      publishedAt: '2024-01-25',
      featured: true,
    },
    {
      id: 3,
      title: 'TypeScript Best Practices for Large Projects',
      excerpt: 'Master TypeScript patterns and practices that will help you maintain large-scale applications.',
      author: { name: 'Mike Johnson', avatar: '/images/author3.jpg' },
      category: 'TypeScript',
      readTime: '6 min read',
      publishedAt: '2024-02-01',
      featured: false,
    },
  ];

  return (
    <Box>
      <Box sx={{ background: 'linear-gradient(135deg, #141e33ff  0%, #1d4ed8 100%)', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h1" sx={{ mb: 4, fontWeight: 700 }}>Blog</Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 700, mx: 'auto' }}>
              Insights, tutorials, and thoughts on modern web development and technology trends.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={4} key={post.id}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      {post.featured && <Chip label="Featured" color="primary" size="small" sx={{ mb: 2 }} />}
                      <Typography variant="h5" sx={{ mb: 2 }}>{post.title}</Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>{post.excerpt}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar src={post.author.avatar} sx={{ width: 32, height: 32, mr: 2 }} />
                        <Box>
                          <Typography variant="body2">{post.author.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{post.publishedAt} • {post.readTime}</Typography>
                        </Box>
                      </Box>
                      <Chip label={post.category} size="small" variant="outlined" />
                    </CardContent>
                    <CardActions>
                      <Button component={Link} to={`/blog/${post.id}`} size="small">Read More</Button>
                    </CardActions>
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

export default Blog;
