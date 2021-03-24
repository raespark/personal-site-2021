import React from 'react';

import './styles.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="left-footer">
                    © {new Date().getFullYear()} by Rachael Metcalf
                </div>
                <div className="right-footer">
                    <a
                        className="footer-link"
                        href="https://github.com/raespark/personal-site-2021"
                    >
                        Source Code
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
