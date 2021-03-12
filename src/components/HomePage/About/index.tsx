import React from 'react';

import './styles.scss';

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="about-columns">
                <div className="about-left">
                    <h3 className="about-header text-center">Who am I?</h3>
                    <p className="about-paragraph">
                        Hey! I'm Rachael, or Rae! I'm a programmer that also
                        dabbles in other hobbies like drawing and crafting and
                        sewing and cosplaying and writing and...wow I have too
                        many hobbies don't I? I'm a huge Nintendo nerd, and a
                        natural born Texan, currently residing in the beautiful{' '}
                        <span className="emphasis">Austin, Texas</span>! I'm a
                        huge fan of pastel anything and also my current
                        obsession is cute pastel keyboards. You can also never
                        go wrong with Pokèmon with me. Most evenings you can
                        either catch me chilling with online friends over
                        discord, or hanging on a couch playing games on my
                        Nintendo Switch.
                    </p>
                </div>
                <div className="about-right">
                    <h3 className="about-header text-center">What am I?</h3>
                    <p className="about-paragraph">
                        I've been a professional software engineer since
                        graduating from the{' '}
                        <span className="emphasis">University of Texas</span> in
                        May of 2017, and have a huge passion for building
                        amazing user experiences. I even have some minor
                        experience with designing UI's myself. I definitely
                        wouldn't call myself an expert, but I designed this site
                        you're using right now!{' '}
                        <span className="emphasis">
                            UI and UX have always been my passion.
                        </span>{' '}
                        I've worked in developing small little video games in my
                        free time, but have also been working on production
                        level web applications since before I graduated from
                        college through my summer internships! I love crafting
                        and building experiences that are a delight to use, and
                        writing code that I'm proud of. If there's something I
                        think feels unintuitive or clunky, I'm not afraid to let
                        you know!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
