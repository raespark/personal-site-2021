import React from 'react';
import classnames from 'classnames';
import { Menu } from 'react-feather';
import { Link } from 'gatsby';

import './styles.scss';

const Header: React.FC = () => {
    return (
        <div className={classnames('header')}>
            <div className="header-menu">
                <Menu className="menu-icon" strokeWidth={2.5} />
                <div className="header-brand">Rachael Metcalf</div>
            </div>
            <div className="header-navigation">
                <Link to="/" className={classnames('nav-link', 'selected')}>
                    About
                </Link>
                <Link to="/projects" className={classnames('nav-link')}>
                    Projects
                </Link>
                <Link to="/contact" className={classnames('nav-link')}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Header;
