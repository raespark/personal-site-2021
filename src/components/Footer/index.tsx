import React from 'react';

import './styles.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                © {new Date().getFullYear()} by Rachael Metcalf, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    );
};

export default Footer;
