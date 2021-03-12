import React from 'react';

import Hero from './Hero';
import About from './About';
import './styles.scss';

const HomePageContents: React.FC = () => {
    return (
        <div className="homepage">
            <Hero />
            <About />
        </div>
    );
};

export default HomePageContents;
