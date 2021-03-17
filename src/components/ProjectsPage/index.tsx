import React, { useState } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import classnames from 'classnames';

import Hero from './Hero';
import './styles.scss';
import ProjectCard from './ProjectCard';

export enum ProjectMedia {
    video = 'video',
    iframe = 'iframe',
    imageGallery = 'imageGallery',
}

export interface Link {
    text: string;
    url: string;
}

export interface ProjectPreview {
    id: number;
    builtFor: string;
    type: string;
    previewImage: IGatsbyImageData;
    professional: boolean;
    title: string;
    url: string;
    year: number;
}

interface ProjectsPageProps {
    projects: ProjectPreview[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({
    projects,
}: ProjectsPageProps) => {
    const [projectsList, setProjectsList] = useState(projects);
    const [selected, setSelected] = useState(0);

    const filterProjectsList = (field: string, value: any): void => {
        setProjectsList(projects.filter((project) => project[field] === value));
    };

    return (
        <div className="projects-page">
            <Hero />
            <div className="projects-page-contents">
                <div className="projects-filters">
                    <div
                        className={classnames('projects-filter', {
                            active: selected === 0,
                        })}
                        onClick={() => {
                            setSelected(0);
                            setProjectsList(projects);
                        }}
                    >
                        All
                    </div>
                    <div className="projects-filter-divider">•</div>
                    <div
                        className={classnames('projects-filter', {
                            active: selected === 1,
                        })}
                        onClick={() => {
                            setSelected(1);
                            filterProjectsList('professional', true);
                        }}
                    >
                        Professional
                    </div>
                    <div className="projects-filter-divider">•</div>
                    <div
                        className={classnames('projects-filter', {
                            active: selected === 2,
                        })}
                        onClick={() => {
                            setSelected(2);
                            filterProjectsList('professional', false);
                        }}
                    >
                        Personal
                    </div>
                </div>
                <div className="projects-list">
                    {projectsList.map((project) => (
                        <ProjectCard
                            key={project.id}
                            className="project-card"
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
