import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './styles.scss';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-text">
                    <h1 className="hero-quote text-center">
                        I build and create{' '}
                        <span className="emphasis">delightful</span> user
                        experiences
                    </h1>
                    <div className="hero-description">
                        <h2 className="hero-description-text">
                            Rachael Metcalf
                        </h2>
                        <hr className="hero-hr" />
                        <h3 className="hero-description-text subtitle">
                            Professional UI/Full Stack
                            <br />
                            Engineer since 2017
                        </h3>
                    </div>
                </div>
                <div className="hero-image-container">
                    <StaticImage
                        className="hero-image"
                        src="about-hero.png"
                        alt="A stylized drawing of me, Rachael Metcalf, at a computer"
                        placeholder="tracedSVG"
                        layout="constrained"
                        width={250}
                        quality={75}
                        formats={['auto', 'webp', 'avif']}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
