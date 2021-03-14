import React from 'react';

import Header, { NavSelected } from '../../components/Header';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import ContactSuccess from '../../components/ContactSubmissionSuccess';

import '../../global.scss';

const Projects: React.FC = () => {
    return (
        <Layout>
            <SEO title="Thank You! - Rachael Metcalf" />
            <Header selected={NavSelected.contact} />
            <ContactSuccess />
        </Layout>
    );
};

export default Projects;
