import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import Header, { NavSelected } from '../../components/Header';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import ProjectsPage, { ProjectPreview } from '../../components/ProjectsPage';

import '../../global.scss';

type DataProps = {
    json: {
        projects: {
            id: number;
            builtFor: string;
            type: string;
            previewImage: IGatsbyImageData;
            professional: boolean;
            title: string;
            url: string;
            year: number;
        }[];
    };
};

const Projects: React.FC<PageProps<DataProps>> = ({ data }) => {
    return (
        <Layout>
            <SEO title="Projects - Rachael Metcalf" />
            <Header selected={NavSelected.projects} heroPage />
            <ProjectsPage projects={data.json.projects as ProjectPreview[]} />
        </Layout>
    );
};

export default Projects;

export const query = graphql`
    {
        json {
            projects {
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
            }
        }
    }
`;
