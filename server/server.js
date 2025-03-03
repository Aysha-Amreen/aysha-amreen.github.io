const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',  // Allow frontend to access assets
  methods: 'GET',
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Serve static files from the assets folder with correct headers
app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  setHeaders: (res, filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.mp4': 'video/mp4',
      '.txt': 'text/plain',
      '.sql': 'application/sql',
      '.pdf': 'application/pdf',
      '.json': 'application/json',
      '.md': 'text/markdown'
    };
    
    if (mimeTypes[ext]) {
      res.setHeader('Content-Type', mimeTypes[ext]);
    }
  }
}));

// Import project routes
const projectRoutes = require('./routes/projects');
app.use('/api', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});