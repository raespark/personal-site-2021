import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ProjectPreview } from '../index';
import './styles.scss';

interface ProjectCardProps {
    project: ProjectPreview;
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    className,
}: ProjectCardProps) => {
    const image = getImage(project.previewImage);
    return (
        <Link to={`${project.url}/`} className={`project-card ${className}`}>
            <div className="project-card-background">
                <div className="project-preview-image-container">
                    <GatsbyImage
                        className="project-preview-image"
                        image={image}
                        alt={`A screenshot of ${project.title}`}
                    />
                </div>
                <div className="project-text">
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-subtitle">
                        <div className="project-type project-info">
                            {project.type}
                        </div>
                        <div className="project-info-divider">•</div>
                        <div className="project-builtFor project-info">
                            {project.builtFor}
                        </div>
                        <div className="project-info-divider">•</div>
                        <div className="project-year project-info">
                            {project.year}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
