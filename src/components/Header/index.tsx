import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Menu, GitHub, Linkedin } from 'react-feather';
import { Link } from 'gatsby';
import { isDesktop } from 'react-device-detect';

import SideMenu from '../SideMenu';
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
    const [showMenu, setShowMenu] = useState(false);

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
        // Due to the nature of how scroll events work on mobile
        // I disable to scroll animation to optimize the mobile experience
        if (homePage && isDesktop) {
            window.onscroll = handleScroll;
            handleScroll();
        } else {
            setTopOfPage(false);
        }
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className={classnames('header', { 'full-width': !topOfPage })}>
                <div className="header-menu">
                    <Menu
                        className="menu-icon"
                        strokeWidth={2.5}
                        onClick={toggleMenu}
                    />
                    <Link to="/">
                        <h2 className="header-brand">Rachael Metcalf</h2>
                    </Link>
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
                        title="GitHub"
                    >
                        <GitHub className="external-link-icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rachael-metcalf/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <Linkedin className="external-link-icon" />
                    </a>
                </div>
            </div>
            <SideMenu
                showMenu={showMenu}
                onHide={toggleMenu}
                currentPage={selected}
            />
        </>
    );
};

export default Header;
