import React from 'react';

import './styles.scss';

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="about-columns">
                <div className="about-left">
                    <h3 className="about-header text-center">Who am I?</h3>
                    <p className="about-paragraph">
                        Hey!{' '}
                        <span className="emphasis">I'm Rachael or Rae!</span>{' '}
                        I'm a programmer that also dabbles in other hobbies like
                        drawing, crafting, sewing, cosplaying, writing and more!
                        I love being creative and bringing something from an
                        abstract idea into something tangible and real. I'm a
                        huge Nintendo nerd, and a natural born Texan, currently
                        residing in the beautiful{' '}
                        <span className="emphasis">Austin, Texas</span>! I'm a
                        huge fan of pastel anything and my current obsession is
                        cute, colorful, pastel keyboards. I'm also a huge fan of
                        gaming in general, especially Pokémon! I enjoy being
                        with friends either online or in person (when that was a
                        thing) or hanging out on my couch playing games on my
                        Nintendo Switch, getting lost in it's games' fantastical
                        worlds.
                    </p>
                </div>
                <div className="about-right">
                    <h3 className="about-header text-center">What am I?</h3>
                    <p className="about-paragraph">
                        I've been a professional software engineer for about 4
                        years since graduating from{' '}
                        <span className="emphasis">
                            the University of Texas
                        </span>{' '}
                        with a BS in Computer Science in 2017. Since then, I
                        have gained experience building products from pre-launch
                        to launch phases, and working within teams and
                        ecosystems big and small.{' '}
                        <span className="emphasis">
                            I have a huge passion for building unique and
                            pleasant user experiences.
                        </span>{' '}
                        I'm UX and UI obsessed and have also designed some UI's
                        myself. I'm a strong advocate for the user and work to
                        ensure code is clean, readable and will result in a
                        fantastic user experience. In my free time, I also do
                        game development and content creation, creating art to
                        share with the world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
