// If you don't want to use TypeScript you can delete this file!
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomePageContents from '../components/HomePage';

import '../global.scss';
import Header from '../components/header';

const HomePage: React.FC = () => (
    <Layout>
        <SEO title="Rachael Metcalf - Software Engineer" />
        <Header />
        <HomePageContents />
    </Layout>
);

export default HomePage;
