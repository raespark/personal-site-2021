import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './styles.scss';

const Hero: React.FC = () => {
    return (
        <div className="project-hero">
            <div className="project-hero-container">
                <div className="project-hero-text">
                    <h1 className="project-hero-quote text-center">
                        What have I <br />
                        already <span className="emphasis">built</span>?
                    </h1>
                    <div className="project-hero-description">
                        <h2 className="project-hero-description-text">
                            Projects
                        </h2>
                        <hr className="project-hero-hr" />
                        <h3 className="project-hero-description-text subtitle">
                            A portfolio of my <br />
                            personal/professional work
                        </h3>
                    </div>
                </div>
                <div className="project-hero-image-container">
                    <StaticImage
                        className="project-hero-image"
                        src="projects-hero.png"
                        alt="A stylized drawing of me, Rachael Metcalf, building up a tower out of blocks"
                        placeholder="tracedSVG"
                        layout="constrained"
                        width={300}
                        quality={90}
                        formats={['auto', 'webp']}
                        loading={'eager'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
