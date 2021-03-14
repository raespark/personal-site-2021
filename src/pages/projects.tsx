import React from 'react';

import Header, { NavSelected } from '../components/Header';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ProjectsPage from '../components/ProjectsPage';

import '../global.scss';

const Projects: React.FC = () => {
    return (
        <Layout>
            <SEO title="Projects - Rachael Metcalf" />
            <Header selected={NavSelected.projects} />
            <ProjectsPage />
        </Layout>
    );
};

export default Projects;
