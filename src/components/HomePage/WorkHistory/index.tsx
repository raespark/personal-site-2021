import React from 'react';

import './styles.scss';

const WorkHistory: React.FC = () => {
    return (
        <div className="work-history-container">
            <h2 className="work-history-title">What have I done?</h2>
            <div className="work-history">
                <div className="accent-circle-left" />
                <div className="accent-circle-right" />
                <div className="work-history-row">
                    <div className="job">
                        <div className="job-title">
                            Nexus <br />
                            <hr className="work-history-hr" />
                            Software Engineer
                        </div>
                        <div className="job-years emphasis">2020-2021</div>
                        <p className="job-information">
                            Nexus is a startup that provides content creators a
                            platform to design and build their own game stores,
                            giving them a portion of the revenue from each
                            purchase they help to drive. Working in React and
                            Typescript{' '}
                            <span className="emphasis">
                                I took it from prototype to launch and beyond,
                            </span>{' '}
                            continuing to support the product with frequent
                            updates including bug fixes and new features. I
                            worked closely with product and design to quickly
                            deliver and craft the best experience for our
                            creators, wearing multiple hats when necessary to
                            reach our goals. I worked on both creator-facing and
                            customer-facing features, working in both the
                            front-end and back-end portions of the codebase. We
                            got up to an average monthly user base of 64k and an
                            NPS score of 50, and the GMV increasing by 200% from
                            October 2020 to March 2021.
                        </p>
                    </div>
                    <div className="job">
                        <div className="job-title">
                            Vrbo / Expedia <br />
                            <hr className="work-history-hr" />
                            Software Engineer
                        </div>
                        <div className="job-years emphasis">2017-2019</div>
                        <p className="job-information">
                            After two successful summer internships in 2015 and
                            2016, I was hired on full-time to work on internal
                            tools and applications.{' '}
                            <span className="emphasis">
                                I designed and developed applications from
                                concept to deployment
                            </span>{' '}
                            that worked with new bleeding-edge technologies,
                            both internal and external, including React, Redux,
                            MongoDB, and new internal application frameworks. I
                            worked to find issues and document and create
                            tutorials for their use within our tech stack. I
                            then moved to working on the Profile team building
                            out new features and pages for users to manage their
                            data,{' '}
                            <span className="emphasis">
                                taking epics and breaking them down into
                                detailed workable tickets.
                            </span>{' '}
                            Alongside that, I revived an internal training
                            organization for junior developers. I organized and
                            gave talks, taught, mentored in tooling, frameworks,
                            career advice, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkHistory;
