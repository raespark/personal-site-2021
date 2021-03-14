import React from 'react';

import LinkButton from '../../LinkButton';
import './styles.scss';

interface WorkWitMeProps {
    text?: string;
    inverse?: boolean;
}

const WorkWithMe: React.FC<WorkWitMeProps> = ({
    text = 'Want to work with me?',
    inverse = false,
}: WorkWitMeProps) => {
    return (
        <div className="work-with-me">
            <div className="work-with-me-background">
                <h4 className="work-with-me-text">{text}</h4>
                <LinkButton
                    link="/contact"
                    text="Reach Out"
                    inverse={inverse}
                    className="contact-button"
                />
            </div>
        </div>
    );
};

export default WorkWithMe;
