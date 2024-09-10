// ProjectShowcase.js
import React from 'react';
import './ProjectShowcase.css';
import { PROJECTS } from '../../Utils/data';

function ProjectShowcase() {
    return (
        <section className='project-showcase-container'>
            <h5>Project Showcase</h5>
            <div className='project-showcase-content'>
                {PROJECTS.map((project) => (
                    <div className='project-card' key={project.title}>
                        <div className='project-domain'>
                            <h6>{project.domain}</h6>
                        </div>
                        <div className='project-info'>
                            <p><strong>Customer:</strong> {project.customer}</p>
                        </div>
                        <div className='project-info'>
                            <p className='work-duration'><strong>Duration:</strong> {project.duration}</p>
                        </div>
                        <div className='project-tasks'>
                            <p><strong>Tasks:</strong></p>
                            <ul>
                                {project.tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                        </div>
                        <a href={project.demoLink} className='demo-button' target='_blank' rel='noopener noreferrer'>
                            View Demo
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectShowcase;
