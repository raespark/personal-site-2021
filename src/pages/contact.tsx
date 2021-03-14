import React from 'react';

import Header, { NavSelected } from '../components/Header';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ContactPage from '../components/ContactPage';

import '../global.scss';

const Projects: React.FC = () => {
    return (
        <Layout>
            <SEO title="Contact - Rachael Metcalf" />
            <Header selected={NavSelected.contact} />
            <ContactPage />
        </Layout>
    );
};

export default Projects;
