import express from 'express';

const router = express.Router();

// Mock projects database (replace with real database in production)
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js featuring payment integration, inventory management, and admin dashboard.',
    image: '/images/project1.jpg',
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

// Get all projects
router.get('/', (req, res) => {
  try {
    const { category, status, featured, limit = 10, page = 1 } = req.query;

    let filteredProjects = [...projects];

    if (category) {
      filteredProjects = filteredProjects.filter(project =>
        project.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (status) {
      filteredProjects = filteredProjects.filter(project =>
        project.status.toLowerCase() === status.toLowerCase()
      );
    }

    if (featured !== undefined) {
      filteredProjects = filteredProjects.filter(project =>
        project.featured === (featured === 'true')
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    res.json({
      success: true,
      count: paginatedProjects.length,
      total: filteredProjects.length,
      page: parseInt(page),
      totalPages: Math.ceil(filteredProjects.length / limit),
      data: paginatedProjects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching projects'
    });
  }
});

// Get single project
router.get('/:id', (req, res) => {
  try {
    const project = projects.find(p => p.id === parseInt(req.params.id));

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching project'
    });
  }
});

// Get project categories
router.get('/meta/categories', (req, res) => {
  try {
    const categories = [...new Set(projects.map(project => project.category))];

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

// Get project technologies
router.get('/meta/technologies', (req, res) => {
  try {
    const allTechnologies = projects.flatMap(project => project.technologies);
    const technologies = [...new Set(allTechnologies)];

    res.json({
      success: true,
      data: technologies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching technologies'
    });
  }
});

// Create new project (admin only)
router.post('/', (req, res) => {
  try {
    const { title, description, image, technologies, category, status, demoUrl, githubUrl, featured } = req.body;

    const newProject = {
      id: projects.length + 1,
      title,
      description,
      image: image || '/images/default-project.jpg',
      technologies: technologies || [],
      category,
      status: status || 'In Progress',
      demoUrl: demoUrl || '',
      githubUrl: githubUrl || '',
      featured: featured || false,
    };

    projects.push(newProject);

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: newProject
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while creating project'
    });
  }
});

export default router;
