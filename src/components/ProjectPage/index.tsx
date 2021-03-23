import React, { useState } from 'react';
import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { X } from 'react-feather';
import ReactPlayer from 'react-player';
import { isMobile } from 'react-device-detect';

import {
    ReactIcon,
    JavaScript,
    TypeScript,
    CSS,
    Godot,
    Node,
    IconsEnum,
    Java,
} from '../Icons';
import Pagination from '../Pagination';

import './styles.scss';

export enum MediaType {
    Video = 'video',
    ImageGallery = 'image-gallery',
    YouTube = 'youtube',
}

export interface Project {
    id: number;
    builtFor: string;
    type: string;
    previewImage: IGatsbyImageData;
    professional: boolean;
    title: string;
    url: string;
    year: number;
    description: string;
    media: string | string[];
    mediaType: MediaType;
    imageGalleryMedia?: { caption: string; image: IGatsbyImageData }[];
    createdWith?: { label: string; icon: IconsEnum }[];
    links?: { text: string; url: string }[];
    tagline?: string;
}

interface ProjectPageProps {
    project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
    project,
}: ProjectPageProps) => {
    const [openImage, setOpenImage] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const handleShowImage = (imageIndex: number): void => {
        if (currentImage != imageIndex) {
            setCurrentImage(imageIndex);
        }
        setOpenImage(true);
    };

    const handleHideImage = (): void => {
        setOpenImage(false);
    };

    const renderMedia = (project: Project) => {
        switch (project.mediaType) {
            case MediaType.Video:
                return (
                    <video
                        src={project.media as string}
                        className="project-video"
                        autoPlay
                        loop
                        muted
                    />
                );
            case MediaType.YouTube:
                return (
                    <div className="youtube-player-container">
                        <ReactPlayer
                            url={project.media}
                            className="youtube-player"
                            volume={0.75}
                            controls
                        />
                    </div>
                );
            case MediaType.ImageGallery:
                return (
                    <>
                        {openImage && (
                            <div className="open-image">
                                <div
                                    className="image-backdrop"
                                    onClick={handleHideImage}
                                />
                                <div className="image-container">
                                    <X
                                        className="image-close"
                                        onClick={handleHideImage}
                                    />
                                    <GatsbyImage
                                        image={getImage(
                                            project.imageGalleryMedia[
                                                currentImage
                                            ].image
                                        )}
                                        alt={`${project.title} image`}
                                        className="full-image"
                                    />
                                    {!!project.imageGalleryMedia[currentImage]
                                        .caption && (
                                        <div className="image-caption text-center">
                                            {
                                                project.imageGalleryMedia[
                                                    currentImage
                                                ].caption
                                            }
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        <Pagination
                            pageSize={1}
                            arrows
                            startingPage={currentImage}
                            className="image-gallery"
                        >
                            {project.imageGalleryMedia.map(
                                (imageData, index) => {
                                    const image = getImage(imageData.image);
                                    return (
                                        <div
                                            className="image-gallery-container"
                                            onClick={() => {
                                                handleShowImage(index);
                                            }}
                                        >
                                            <GatsbyImage
                                                key={index}
                                                image={image}
                                                alt={`${project.title} image ${index}`}
                                                className="image-gallery-image"
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </Pagination>
                    </>
                );
        }
    };

    const toolIcon = (iconString: IconsEnum) => {
        switch (iconString) {
            case IconsEnum.react:
                return <ReactIcon className="tool-icon" />;
            case IconsEnum.javascript:
                return <JavaScript className="tool-icon" />;
            case IconsEnum.typescript:
                return <TypeScript className="tool-icon" />;
            case IconsEnum.css:
                return <CSS className="tool-icon" />;
            case IconsEnum.node:
                return <Node className="tool-icon" />;
            case IconsEnum.java:
                return <Java className="tool-icon" />;
            case IconsEnum.godot:
                return <Godot className="tool-icon" />;
            default:
                return <div>NO ICON</div>;
        }
    };

    return (
        <div className="project-page">
            <div className="project-page-contents">
                <div className="project-breadcrumb">
                    <Link
                        to="/projects/#projects-filters"
                        className="breadcrumb-link"
                    >
                        Projects
                    </Link>
                    <span className="breadcrumb-divider">{'>'}</span>
                    <div className="breadcrumb-current">{project.title}</div>
                </div>
                <h2 className="project-title text-center">{project.title}</h2>
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
                {project.tagline && (
                    <h2 className="project-tagline text-center">
                        {project.tagline}
                    </h2>
                )}
                <div className="project-media">{renderMedia(project)}</div>
                <div className="project-description-container">
                    <h4 className="project-inner-header description-header">
                        What is it?
                    </h4>
                    <p className="project-description">{project.description}</p>
                </div>

                {(!!project.createdWith || !!project.links) && (
                    <hr className="project-hr" />
                )}
                {!!project.links && (
                    <>
                        <h4 className="project-inner-header">Links</h4>
                        <div className="project-links">
                            {project.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="project-link-button">
                                        {link.text}
                                    </button>
                                </a>
                            ))}
                        </div>
                    </>
                )}

                {!!project.createdWith && !!project.links && (
                    <hr className="project-hr" />
                )}

                {!!project.createdWith && (
                    <>
                        <h4 className="project-inner-header">Created Using</h4>
                        <div className="project-tools">
                            {project.createdWith.map((tool, index) => (
                                <div className="project-tool" key={index}>
                                    <div className="tool-bubble">
                                        {toolIcon(tool.icon)}
                                    </div>
                                    <div className="tool-label text-center">
                                        {tool.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectPage;
