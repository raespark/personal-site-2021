import React from 'react';
import { Link } from 'gatsby';
import { ArrowUpRight } from 'react-feather';
import classnames from 'classnames';

import './styles.scss';

interface WorkWitMeProps {
    link: string;
    text?: string;
    inverse?: boolean;
    className?: string;
}

const WorkWithMe: React.FC<WorkWitMeProps> = ({
    link,
    text = 'reach out',
    inverse = false,
    className,
}: WorkWitMeProps) => {
    return (
        <button
            className={classnames(
                'link-button',
                {
                    inverse: inverse,
                },
                className
            )}
        >
            <Link to={link} className="link-button-link">
                <h4 className="button-text">{text}</h4>
                <ArrowUpRight className="arrow-icon" />
            </Link>
        </button>
    );
};

export default WorkWithMe;
