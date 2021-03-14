import React from 'react';

import Header, { NavSelected } from '../components/header';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ProjectsPage from '../components/ProjectsPage';

import '../global.scss';

const Projects: React.FC = () => {
    return (
        <Layout>
            <SEO title="Rachael Metcalf - Projects" />
            <Header selected={NavSelected.projects} />
            <ProjectsPage />
        </Layout>
    );
};

export default Projects;
