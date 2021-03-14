import React from 'react';

import Header, { NavSelected } from '../components/Header';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ContactPage from '../components/ContactPage';

import '../global.scss';

const Projects: React.FC = () => {
    return (
        <Layout>
            <SEO title="Rachael Metcalf - Contact" />
            <Header selected={NavSelected.contact} />
            <ContactPage />
        </Layout>
    );
};

export default Projects;
