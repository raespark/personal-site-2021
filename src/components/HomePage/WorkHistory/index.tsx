import React from 'react';

import './styles.scss';

const WorkHistory: React.FC = () => {
    return (
        <div className="work-history-container">
            <h2 className="work-history-title">Whave have I done?</h2>
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
                        <h4 className="job-years emphasis">2020-2021</h4>
                        <p className="job-information">
                            My first startup experience. At Nexus (formerly
                            Chrono.gg) I worked with a small elite team to build
                            out an entire new product from scratch that allowed
                            content creators to create their own game stores,
                            building to an average monthly user rate of almost
                            64k, and both customer and creator NPS scores of
                            over 50. From October 2020 to March 2021, GMV
                            increased by 200%. I worked on many parts of the
                            application and worked closely with both product and
                            design to to quickly delivery and craft the best
                            experience to meet the needs of our creator's and
                            their fan base.
                        </p>
                    </div>
                    <div className="job">
                        <div className="job-title">
                            Vrbo / Expedia <br />
                            <hr className="work-history-hr" />
                            Software Engineer
                        </div>
                        <h4 className="job-years emphasis">2017-2019</h4>
                        <p className="job-information">
                            After two successful internships in Summer 2015, and
                            Summer 2016, I was hired on full-time as a full
                            stack engineer. I first worked with an internal
                            tools team that developed applications that worked
                            with new bleeding-edge technologies, both internal
                            and external, to find issues and document their use
                            within our tech stack. I then moved to working on
                            the Profile team and working on GDPR compliance
                            across our applications, alongside building out new
                            features and pages for users to manage their data.
                            Alongside that, I revived a training organization
                            for junior developers to organize and give talks
                            teaching and mentoring in tooling, frameworks,
                            career advice, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkHistory;
