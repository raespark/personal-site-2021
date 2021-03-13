import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import { X, Home, BookOpen, Mail, GitHub, Linkedin } from 'react-feather';
import { Link } from 'gatsby';

import './styles.scss';

interface MenuProps {
    onHide: () => void;
    showMenu: boolean;
}

const SideMenu: React.FC<MenuProps> = ({
    onHide,
    showMenu = false,
}: MenuProps) => {
    const [showBackdrop, setShowBackdrop] = useState(showMenu);

    useEffect(() => {
        console.log('SHOW MENU');
        setShowBackdrop(showMenu);
    }, [showMenu]);

    return (
        <>
            {showMenu && <div className="menu-backdrop" onClick={onHide} />}
            <div className={classnames('side-menu', { 'show-menu': showMenu })}>
                <div className="menu-top">
                    <X className="menu-close" onClick={onHide} />
                </div>
                <div className="menu-content">
                    <div className="menu-image-container">
                        <StaticImage
                            className="menu-image"
                            src="me-waving.png"
                            alt="A stylized drawing of me waving"
                            placeholder="tracedSVG"
                            quality={95}
                            formats={['auto', 'webp', 'avif']}
                        />
                    </div>
                    <div className="menu-text">
                        <h3 className="menu-text-name">Rachael Metcalf</h3>
                        <h3 className="menu-text-description">
                            Professional UI/Full Stack
                            <br />
                            Engineer since 2017
                        </h3>
                    </div>
                    <hr className="menu-hr" />
                    <div className="menu-links">
                        <Link to="/">
                            <button className="menu-link-button">
                                <Home className="link-icon" /> About
                            </button>
                        </Link>
                        <Link to="/projects">
                            <button className="menu-link-button">
                                <BookOpen className="link-icon" /> Projects
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="menu-link-button">
                                <Mail className="link-icon" />
                                Contact
                            </button>
                        </Link>
                    </div>
                    <hr className="menu-hr" />
                    <div className="menu-external-links">
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
            </div>
        </>
    );
};

export default SideMenu;
