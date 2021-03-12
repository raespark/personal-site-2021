import React from 'react';

import './styles.scss';

const HomePageContents: React.FC = () => {
    return (
        <div className="about">
            <div className="about-columns">
                <div className="about-left">
                    <h3 className="about-header">Who am I?</h3>
                    <p className="about-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Vulputate mi sit amet mauris commodo. Et
                        netus et malesuada fames. Quam elementum pulvinar etiam
                        non. Enim ut tellus elementum sagittis. Tincidunt augue
                        interdum velit euismod in. Aenean vel elit scelerisque
                        mauris pellentesque pulvinar pellentesque habitant
                        morbi.
                    </p>
                </div>
                <div className="about-right">
                    <h3 className="about-header">What am I?</h3>
                    <p className="about-paragraph">
                        Viverra orci sagittis eu volutpat odio facilisis mauris
                        sit amet. Dictum sit amet justo donec enim diam
                        vulputate ut pharetra. Ornare lectus sit amet est
                        placerat. Pulvinar proin gravida hendrerit lectus. At
                        tempor commodo ullamcorper a lacus. Fermentum et
                        sollicitudin ac orci phasellus egestas. Integer quis
                        auctor elit sed vulputate mi. Cras ornare arcu dui
                        vivamus arcu felis. Sed libero enim sed faucibus. Dictum
                        fusce ut placerat orci nulla pellentesque dignissim.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePageContents;
