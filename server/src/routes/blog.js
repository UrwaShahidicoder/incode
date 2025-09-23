import express from 'express';

const router = express.Router();

// Mock blog posts database (replace with real database in production)
const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    slug: 'building-scalable-react-applications',
    excerpt: 'Learn how to build scalable and maintainable React applications using best practices and modern tools.',
    content: 'Full content of the blog post...',
    author: {
      name: 'John Doe',
      avatar: '/images/author1.jpg',
      bio: 'Senior React Developer'
    },
    category: 'React',
    tags: ['React', 'JavaScript', 'Scalability'],
    featured: true,
    published: true,
    publishedAt: '2024-01-20',
    readTime: '5 min read',
    views: 1250
  },
  {
    id: 2,
    title: 'Node.js Performance Optimization Tips',
    slug: 'nodejs-performance-optimization-tips',
    excerpt: 'Discover essential techniques to optimize your Node.js applications for better performance.',
    content: 'Full content of the blog post...',
    author: {
      name: 'Jane Smith',
      avatar: '/images/author2.jpg',
      bio: 'Backend Engineer'
    },
    category: 'Node.js',
    tags: ['Node.js', 'Performance', 'Optimization'],
    featured: true,
    published: true,
    publishedAt: '2024-01-25',
    readTime: '7 min read',
    views: 980
  },
  {
    id: 3,
    title: 'TypeScript Best Practices for Large Projects',
    slug: 'typescript-best-practices-large-projects',
    excerpt: 'Master TypeScript patterns and practices that will help you maintain large-scale applications.',
    content: 'Full content of the blog post...',
    author: {
      name: 'Mike Johnson',
      avatar: '/images/author3.jpg',
      bio: 'Full Stack Developer'
    },
    category: 'TypeScript',
    tags: ['TypeScript', 'Best Practices', 'Architecture'],
    featured: false,
    published: true,
    publishedAt: '2024-02-01',
    readTime: '6 min read',
    views: 750
  }
];

// Get all blog posts
router.get('/', (req, res) => {
  try {
    const { category, featured, published, limit = 10, page = 1 } = req.query;

    let filteredPosts = [...blogPosts];

    if (category) {
      filteredPosts = filteredPosts.filter(post =>
        post.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (featured !== undefined) {
      filteredPosts = filteredPosts.filter(post =>
        post.featured === (featured === 'true')
      );
    }

    if (published !== undefined) {
      filteredPosts = filteredPosts.filter(post =>
        post.published === (published === 'true')
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    res.json({
      success: true,
      count: paginatedPosts.length,
      total: filteredPosts.length,
      page: parseInt(page),
      totalPages: Math.ceil(filteredPosts.length / limit),
      data: paginatedPosts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching blog posts'
    });
  }
});

// Get single blog post
router.get('/:slug', (req, res) => {
  try {
    const post = blogPosts.find(p => p.slug === req.params.slug);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching blog post'
    });
  }
});

// Get blog categories
router.get('/meta/categories', (req, res) => {
  try {
    const categories = [...new Set(blogPosts.map(post => post.category))];

    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching categories'
    });
  }
});

// Get blog tags
router.get('/meta/tags', (req, res) => {
  try {
    const allTags = blogPosts.flatMap(post => post.tags);
    const tags = [...new Set(allTags)];

    res.json({
      success: true,
      data: tags
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching tags'
    });
  }
});

// Create new blog post (admin only)
router.post('/', (req, res) => {
  try {
    const { title, slug, excerpt, content, category, tags, featured, published } = req.body;

    const newPost = {
      id: blogPosts.length + 1,
      title,
      slug,
      excerpt,
      content,
      author: {
        name: 'Admin',
        avatar: '/images/admin.jpg',
        bio: 'Administrator'
      },
      category,
      tags: tags || [],
      featured: featured || false,
      published: published !== undefined ? published : true,
      publishedAt: new Date().toISOString(),
      readTime: '5 min read',
      views: 0
    };

    blogPosts.push(newPost);

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: newPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while creating blog post'
    });
  }
});

export default router;
