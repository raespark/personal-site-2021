import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Menu, GitHub, Linkedin } from 'react-feather';
import { Link } from 'gatsby';

import './styles.scss';

export enum NavSelected {
    about = 'About',
    projects = 'Projects',
    contact = 'Contact',
}

interface HeaderProps {
    selected: NavSelected;
    homePage?: boolean;
}

const Header: React.FC<HeaderProps> = ({
    selected,
    homePage = false,
}: HeaderProps) => {
    const [topOfPage, setTopOfPage] = useState(homePage);

    const handleScroll = () => {
        if (
            document.body?.scrollTop > 50 ||
            document.documentElement?.scrollTop > 50
        ) {
            setTopOfPage(false);
        } else {
            setTopOfPage(true);
        }
    };

    useEffect(() => {
        if (homePage) {
            window.onscroll = handleScroll;
        }
    }, []);

    return (
        <div className={classnames('header', { 'full-width': !topOfPage })}>
            <div className="header-menu">
                <Menu className="menu-icon" strokeWidth={2.5} />
                <div className="header-brand">Rachael Metcalf</div>
            </div>
            <div className="header-navigation">
                <Link
                    to="/"
                    className={classnames('nav-link', 'text-center', {
                        selected: selected === NavSelected.about,
                    })}
                >
                    About
                </Link>
                <Link
                    to="/projects"
                    className={classnames('nav-link', 'text-center', {
                        selected: selected === NavSelected.projects,
                    })}
                >
                    Projects
                </Link>
                <Link
                    to="/contact"
                    className={classnames('nav-link', 'text-center', {
                        selected: selected === NavSelected.contact,
                    })}
                >
                    Contact
                </Link>
            </div>
            <div className="header-external-links">
                <a
                    href="https://github.com/raespark"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub className="external-link-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/rachael-metcalf/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin className="external-link-icon" />
                </a>
            </div>
        </div>
    );
};

export default Header;
