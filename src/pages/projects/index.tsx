import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import Header, { NavSelected } from '../../components/Header';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import ProjectsPage, { ProjectPreview } from '../../components/ProjectsPage';

import '../../global.scss';

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
            };
        }[];
    };
}

const Projects: React.FC<PageProps<DataProps>> = ({ data }) => {
    const projects = data.allJson.edges.map((node) => node.node);
    return (
        <Layout>
            <SEO title="Projects - Rachael Metcalf" />
            <Header selected={NavSelected.projects} heroPage />
            <ProjectsPage projects={projects as ProjectPreview[]} />
        </Layout>
    );
};

export default Projects;

export const query = graphql`
    {
        allJson {
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
                                formats: [AUTO, WEBP]
                                quality: 80
                            )
                        }
                    }
                    professional
                    title
                    url
                    year
                }
            }
        }
    }
`;
