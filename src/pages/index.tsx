// If you don't want to use TypeScript you can delete this file!
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomePageContents from '../components/HomePage';
import Header, { NavSelected } from '../components/Header';

import '../global.scss';

const HomePage: React.FC = () => (
    <Layout>
        <SEO title="Rachael Metcalf" />
        <Header selected={NavSelected.about} heroPage />
        <HomePageContents />
    </Layout>
);

export default HomePage;
