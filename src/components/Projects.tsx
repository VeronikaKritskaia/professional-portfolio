import React, { useState, useEffect, useRef} from 'react';
import '../assets/styles/Projects.scss';

// --- Project Data Array ---
// To add a new project, simply add a new object to this array.
const projectsData = [
  {
    id: 1,
    title: 'Product Assessment with Computer Vision',
    description: 'Developed a computer vision solution to automate product quality assessment, enhancing a circular economy program.',
    details: [
      'Built and fine-tuned multiple Detectron2 models on large labeled datasets for accurate multi-class product quality assessment, leveraging advanced augmentation for improved generalization.',
      'Incorporated domain expertise from sports specialists to validate model performance against real-world quality criteria.',
      'Deployed a scalable pipeline with Ray Serve on Kubernetes, enabling parallel inference and high-throughput batch processing, reducing assessment time and manual effort.',
      'Streamlined predictions by consolidating outputs from multiple models into structured JSON, ensuring a modular and maintainable codebase.'
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
  },
  {
    id: 3,
    title: 'AI-Powered Product Label Automation',
    description: 'Created an AI-powered pipeline using language models and OCR to automate product label analysis.',
    details: [
      'Fine-tuned Transformer NLP models with Named Entity Recognition (NER) to classify unstructured product text into business categories, accelerating product onboarding.',
      'Integrated computer vision pipelines (Detectron2 + OCR) to extract symbols from labels, improving data accuracy.',
      'Translated business requirements into end-to-end AI workflows, combining NLP and CV models into scalable, production-ready solutions.'
    ],
    skills: ['NLP', 'Compute Vision', 'Transformers', 'OCR']
  },
  {
    id: 4,
    title: 'Cold-Start Demand Forecasting for New Products',
    description: 'Designed a cold-start forecasting approach to estimate demand for newly launched products with little or no sales history.',
    details: [
      'Applied HDBSCAN clustering and DTW-based pairwise matching to identify similar historical sales patterns across 100+ departments, implementing fallback logic to extend matches across product families.',
      'Generated synthetic sales histories for new products using scaled reference series, smoothing demand patterns for better forecasting.',
      'Built a scalable training pipeline with Apache Spark, enabling efficient LightGBM model training on enriched time series data and optimizing performance across hundreds of products.',
    ],
    skills: ['Time Series', 'LightGBM', 'HDBSCAN', 'Spark', 'mlforecast', 'dtw distance']
  }
];


const Projects = () => {
  // State to track which project card is expanded (we store its ID)
  const [expandedProjectIds, setExpandedProjectIds] = useState<number[]>([])
  const [maxCardHeight, setMaxCardHeight] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Get all the project card elements
    const cards = grid.children as HTMLCollectionOf<HTMLElement>;
    let maxHeight = 0;

    // Loop through the cards to find the tallest one
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].offsetHeight > maxHeight) {
        maxHeight = cards[i].offsetHeight;
      }
    }

    // Set the tallest height in our state
    setMaxCardHeight(maxHeight);
  }, []); // The empty array [] means this effect runs only once, after the initial render

  return (
    <div className="projects-container" id="projects">
      <h1>My Projects</h1>
      <div className="projects-grid"ref={gridRef}>
        
        {projectsData.map((project) => {
          // --- CHANGE #3: The check for expansion now uses .includes() ---
          const isExpanded = expandedProjectIds.includes(project.id);

          return (
            <div className="project-card" key={project.id} style={{ minHeight: maxCardHeight ? `${maxCardHeight}px` : 'auto' }}>
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