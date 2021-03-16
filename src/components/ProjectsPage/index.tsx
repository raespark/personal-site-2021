import React from 'react';

import Hero from './Hero';
import './styles.scss';

const ProjectsPage: React.FC = () => {
    return (
        <div className="projects-page">
            <div className="projects-page-contents">
                <Hero />
                <h1 className="wip-text">WIP - Under Construction!</h1>
            </div>
        </div>
    );
};

export default ProjectsPage;
