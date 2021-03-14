import React from 'react';

import Hero from './Hero';
import About from './About';
import WorkHistory from './WorkHistory';
import WorkWithMe from './WorkWithMe';
import Skills from './Skills';

import './styles.scss';

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <Hero />
            <About />
            <WorkWithMe />
            <WorkHistory />
            <Skills />
            <div className="final-cta">
                <WorkWithMe text="Like what you see?" inverse />
            </div>
        </div>
    );
};

export default HomePage;
