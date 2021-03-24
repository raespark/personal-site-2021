import React, { useEffect, useState } from 'react';
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

    const [startingPage, setStartingPage] = useState(0);

    const currentPageKey = 'projects-page-index';
    const currentFilterKey = 'projects-filter-index';

    const filterList = [
        { label: 'All' },
        { label: 'Professional', filterKey: 'professional', filterValue: true },
        { label: 'Personal', filterKey: 'professional', filterValue: false },
    ];

    useEffect(() => {
        if (!!window.sessionStorage.getItem(currentFilterKey)) {
            const filterIndex = parseInt(
                window.sessionStorage.getItem(currentFilterKey)
            );
            setSelected(filterIndex);
            filterProjectsList(filterIndex);
        }
        if (!!window.sessionStorage.getItem(currentPageKey)) {
            setStartingPage(
                parseInt(window.sessionStorage.getItem(currentPageKey))
            );
        }
    }, []);

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

    const savePage = (pageNumber: number) => {
        if (!!window) {
            window.sessionStorage.setItem(currentPageKey, `${pageNumber}`);
        }
    };

    const saveFilter = (filterIndex: number) => {
        if (!!window) {
            window.sessionStorage.setItem(currentFilterKey, `${filterIndex}`);
        }
    };

    const filterProjectsList = (filterIndex: number): void => {
        saveFilter(filterIndex);
        setSelected(filterIndex);
        let filteredProjects = projects;
        if (!!filterList[filterIndex].filterKey) {
            const filterKey = filterList[filterIndex].filterKey;
            const filterValue = filterList[filterIndex].filterValue;
            filteredProjects = projects.filter(
                (project) => project[filterKey] === filterValue
            );
        }
        setProjectsList(filteredProjects);
    };

    const renderFilters = () => {
        return filterList.map((filter, index) => {
            let filterComponent = (
                <div
                    className={classnames('projects-filter', {
                        active: selected === index,
                    })}
                    onClick={() => {
                        savePage(0);
                        setStartingPage(0);
                        filterProjectsList(index);
                        scrollToTopOfProjects();
                    }}
                >
                    {filterList[index].label}
                </div>
            );
            if (index < filterList.length - 1) {
                return (
                    <>
                        {filterComponent}
                        <div className="projects-filter-divider">|</div>
                    </>
                );
            } else {
                return filterComponent;
            }
        });
    };

    return (
        <div className="projects-page">
            <Hero />
            <div className="projects-page-contents" id="projects">
                <div className="projects-filters">{renderFilters()}</div>
                <Pagination
                    pageSize={6}
                    className="projects-list"
                    onPage={savePage}
                    startingPage={startingPage}
                >
                    {projectsList.map((project) => (
                        <ProjectCard
                            key={project.id}
                            className="project-card"
                            project={project}
                        />
                    ))}
                </Pagination>
                <div
                    className="projects-filters mobile-filters"
                    id="projects-filters"
                >
                    {renderFilters()}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
