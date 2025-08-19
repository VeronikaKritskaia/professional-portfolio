import React, { useState } from 'react';
import '../assets/styles/Projects.scss';

// --- Project Data Array ---
// To add a new project, simply add a new object to this array.
const projectsData = [
  {
    id: 1,
    title: 'Product Assessment with Computer Vision',
    description: 'Developed a computer vision solution to automate product quality assessment, enhancing a circular economy program.',
    details: [
      'Scraped and labeled extensive datasets to train and fine-tune computer vision models for accurate product quality assessment.',
      'Collaborated closely with sport experts to gather domain expertise and validate model performance.',
      'Successfully deployed the model, streamlining the process and contributing to sustainability goals by reducing assessment time.'
    ],
    skills: ['Python', 'Computer Vision', 'PyTorch', 'Docker']
  },
  {
    id: 2,
    title: 'Competitive Pricing Intelligence Solution',
    description: 'Collaborated on an AI-powered system that tracks competitive offerings to optimize product pricing strategies.',
    details: [
      'Leveraged Large Language Models (LLMs) and trained models on product technical specifications and visual features to achieve high-precision matching.',
      'Developed a user-friendly Streamlit frontend for efficient expert feedback collection.',
      'Successfully replaced manual competitive analysis processes, enabling data-driven pricing decisions.'
    ],
    skills: ['NLP', 'LLMs', 'Streamlit', 'Scikit-learn']
  }
  // Add more project objects here...
];


const Projects = () => {
  // State to track which project card is expanded (we store its ID)
  const [expandedProjectIds, setExpandedProjectIds] = useState<number[]>([])

  const toggleDetails = (id: number) => {
    // Check if the project ID is already in our array of expanded IDs
    if (expandedProjectIds.includes(id)) {
      // If it is, remove it (collapse the card)
      setExpandedProjectIds(expandedProjectIds.filter(expandedId => expandedId !== id));
    } else {
      // If it's not, add it to the array (expand the card)
      setExpandedProjectIds([...expandedProjectIds, id]);
    }
  };

  return (
    <div className="projects-container" id="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        
        {projectsData.map((project) => {
          // --- CHANGE #3: The check for expansion now uses .includes() ---
          const isExpanded = expandedProjectIds.includes(project.id);

          return (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* The conditional rendering now uses the new 'isExpanded' variable */}
                {isExpanded && (
                  <div className="project-details">
                    <ul>
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-footer">
                  <div className="skill-bubbles">
                    {project.skills.map((skill, index) => (
                      <span className="skill-bubble" key={index}>{skill}</span>
                    ))}
                  </div>
                  <button onClick={() => toggleDetails(project.id)} className="show-more-btn">
                    {isExpanded ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default Projects;