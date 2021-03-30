import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import Header, { NavSelected } from '../components/Header';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ProjectPage, { Project, MediaType } from '../components/ProjectPage';
import { IconsEnum } from '../components/Icons';

import '../global.scss';

interface DataProps {
    allJson: {
        edges: {
            node: {
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
                imageGalleryMedia?: {
                    caption: string;
                    image: IGatsbyImageData;
                }[];
                createdWith?: { label: string; icon: IconsEnum }[];
                links?: { text: string; url: string }[];
                tagline?: string;
            };
        }[];
    };
}

const ProjectPageTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
    return (
        <Layout>
            <SEO
                title={`${data.allJson.edges[0].node.title} - Rachael Metcalf`}
            />
            <Header selected={NavSelected.projects} />
            <ProjectPage project={data.allJson.edges[0].node as Project} />
        </Layout>
    );
};

export default ProjectPageTemplate;

export const query = graphql`
    query($slug: String!) {
        allJson(filter: { url: { eq: $slug } }) {
            edges {
                node {
                    id
                    builtFor
                    type
                    previewImage {
                        childImageSharp {
                            gatsbyImageData(
                                height: 400
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                                quality: 40
                            )
                        }
                    }
                    professional
                    title
                    url
                    year
                    tagline
                    description
                    media
                    mediaType
                    createdWith {
                        icon
                        label
                    }
                    links {
                        text
                        url
                    }
                    imageGalleryMedia {
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    height: 700
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP]
                                    quality: 90
                                )
                            }
                        }
                        caption
                    }
                }
            }
        }
    }
`;
