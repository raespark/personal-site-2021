import React from 'react';

import './styles.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} by Rachael Metcalf, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    );
};

export default Footer;
