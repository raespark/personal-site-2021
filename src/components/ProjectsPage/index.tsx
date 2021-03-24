import React, { useState } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';

import Hero from './Hero';
import Pagination from '../Pagination';
import ProjectCard from './ProjectCard';
import './styles.scss';

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

    const scrollToTopOfProjects = () => {
        setTimeout(() => {
            if (isMobile) {
                const filtersElement = document.getElementById(
                    'projects-filters'
                );
                const pageLocation =
                    filtersElement.getBoundingClientRect().top +
                    window.pageYOffset -
                    80;
                window.scrollTo({
                    top: pageLocation,
                    behavior: 'smooth',
                });
            }
        }, 100);
    };

    return (
        <div className="projects-page">
            <Hero />
            <div className="projects-page-contents">
                <div className="projects-filters" id="projects-filters">
                    <div
                        className={classnames('projects-filter', {
                            active: selected === 0,
                        })}
                        onClick={() => {
                            setSelected(0);
                            setProjectsList(projects);
                            scrollToTopOfProjects();
                        }}
                    >
                        All
                    </div>
                    <div className="projects-filter-divider">|</div>
                    <div
                        className={classnames('projects-filter', {
                            active: selected === 1,
                        })}
                        onClick={() => {
                            setSelected(1);
                            filterProjectsList('professional', true);
                            scrollToTopOfProjects();
                        }}
                    >
                        Professional
                    </div>
                    <div className="projects-filter-divider">|</div>
                    <div
                        className={classnames('projects-filter', {
                            active: selected === 2,
                        })}
                        onClick={() => {
                            setSelected(2);
                            filterProjectsList('professional', false);
                            scrollToTopOfProjects();
                        }}
                    >
                        Personal
                    </div>
                </div>
                <Pagination pageSize={6} className="projects-list">
                    {projectsList.map((project) => (
                        <ProjectCard
                            key={project.id}
                            className="project-card"
                            project={project}
                        />
                    ))}
                </Pagination>
                <div className="projects-filters mobile-filters">
                    <div
                        className={classnames('projects-filter', {
                            active: selected === 0,
                        })}
                        onClick={() => {
                            setSelected(0);
                            setProjectsList(projects);
                            scrollToTopOfProjects();
                        }}
                    >
                        All
                    </div>
                    <div className="projects-filter-divider">|</div>
                    <div
                        className={classnames('projects-filter', {
                            active: selected === 1,
                        })}
                        onClick={() => {
                            setSelected(1);
                            filterProjectsList('professional', true);
                            scrollToTopOfProjects();
                        }}
                    >
                        Professional
                    </div>
                    <div className="projects-filter-divider">|</div>
                    <div
                        className={classnames('projects-filter', {
                            active: selected === 2,
                        })}
                        onClick={() => {
                            setSelected(2);
                            filterProjectsList('professional', false);
                            scrollToTopOfProjects();
                        }}
                    >
                        Personal
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
