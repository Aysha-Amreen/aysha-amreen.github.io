const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Load project data
const projectsFilePath = path.join(__dirname, '../data/projects.json');
const projects = JSON.parse(fs.readFileSync(projectsFilePath, 'utf-8'));

router.get('/projects', (req, res) => {
    res.json(projects);
});

// GET individual project by string ID
router.get('/projects/:id', (req, res) => {
    console.log(`Requested project ID: ${req.params.id}`); // ✅ Log incoming ID

    const project = projects.find(p => p.id === req.params.id);
    
    if (project) {
        res.json(project);
    } else {
        console.log(`Project not found for ID: ${req.params.id}`); // ✅ Debugging output
        res.status(404).json({ message: 'Project not found' });
    }
});

module.exports = router;
