import React, { useEffect, useState } from 'react';
import styles from '../../styles/onlineCafe.module.css';
import ProjectTitle from '../../components/projects/ProjectTitle';
import FeaturesTechSection from '../../components/projects/FeaturesTechSection';
import Gallery from '../../components/projects/Gallery';
import VideoPlayer from '../../components/projects/VideoPlayer';
import ViewCodeButton from '../../components/projects/ViewCodeButton';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

function OnlineCafeProject() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/projects/online-cafe`)
      .then(response => response.json())
      .then(data => {
        setProject(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.lhs}>
        <ProjectTitle title={project.title} description={project.description} />

        <FeaturesTechSection
          technologies={project.technologies || []}
          features={project.features || []}
          projectFiles={project.files?.map(file => ({ name: file.name, url: file.url })) || []}
        />

        <ViewCodeButton repoUrl={project.github} />
      </div>

      <div className={styles.rhs}>
        <Gallery images={project.gallery || []} />
        {project.video && <VideoPlayer videoSrc={project.video} poster={project.image} />}
      </div>
    </div>
  );
}

export default OnlineCafeProject;
