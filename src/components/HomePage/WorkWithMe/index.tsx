import React from 'react';
import { Link } from 'gatsby';
import { ArrowUpRight } from 'react-feather';

import './styles.scss';

interface WorkWitMeProps {
    text?: string;
}

const WorkWithMe: React.FC<WorkWitMeProps> = ({
    text = 'Want to work with me?',
}: WorkWitMeProps) => {
    return (
        <div className="work-with-me">
            <div className="work-with-me-background">
                <h4 className="work-with-me-text">{text}</h4>
                <button className="contact-button">
                    <Link to="/contact" className="contact-link">
                        <h4 className="work-with-me-text reach-out-text">
                            reach out
                        </h4>
                        <ArrowUpRight className="reach-out-arrow" />
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default WorkWithMe;
