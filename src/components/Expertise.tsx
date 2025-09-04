import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "NLP",
    "LLMs",
    "Computer Vision",
    "MLflow",
    "API development",
    "pytest"
];

const labelsSecond = [
    "Git",
    "uv",
    "Python",
    "SQL",
    "R",
    "Tableau",
    "Matplotlib",
    "Seaborn",
    "Streamlit",
];

const labelsThird = [
    "GCP",
    "AWS (s3, EC2)",
    "Databricks",
    "Docker",
    "MLflow",
    "FastAPI",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>Develop and deploy end-to-end machine learning solutions, from classical models to cutting-edge deep learning, LLMs, and computer vision systems. 
                        Focus on building robust, scalable, and production-ready AI applications tailored to business needs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Programming & Visualisation</h3>
                    <p>Work fluently across the data science stack using Python, SQL, and specialize in transforming 
                        data into insights through clear and compelling visualizations. Build interactive tools that bring stakeholders closer to data.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & MLOps</h3>
                    <p>Leverage modern cloud and data platforms to scale machine learning workflows and automate deployments. From data pipelines to containerization, 
                        ensure reliability, reproducibility, and performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;