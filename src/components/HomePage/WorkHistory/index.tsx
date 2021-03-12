import React from 'react';

import './styles.scss';

const WorkHistory: React.FC = () => {
    return (
        <div className="work-history">
            <div className="accent-circle-left" />
            <div className="accent-circle-right" />
            <h2 className="work-history-title">Work History</h2>
            <hr className="work-history-hr" />
            <div className="work-history-row">
                <div className="job">
                    <h3 className="job-title">Place I Worked • Title </h3>
                    <h4 className="job-years">2020-2021</h4>
                    <p className="job-information">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Vulputate mi sit amet mauris commodo. Et
                        netus et malesuada fames.
                    </p>
                </div>
                <div className="job">
                    <h3 className="job-title">Place I Worked • Title </h3>
                    <h4 className="job-years">2017-2019</h4>
                    <p className="job-information">
                        Viverra orci sagittis eu volutpat odio facilisis mauris
                        sit amet. Dictum sit amet justo donec enim diam
                        vulputate ut pharetra. Ornare lectus sit amet est
                        placerat. Pulvinar proin gravida hendrerit lectus. At
                        tempor commodo ullamcorper a lacus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WorkHistory;
