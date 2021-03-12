import React from 'react';

import Hero from './Hero';
import About from './About';
import './styles.scss';
import WorkHistory from './WorkHistory';

const HomePageContents: React.FC = () => {
    return (
        <div className="homepage">
            <Hero />
            <About />
            <WorkHistory />
        </div>
    );
};

export default HomePageContents;
