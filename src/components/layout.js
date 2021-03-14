import * as React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';

import './layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <div
                style={{
                    display: 'grid',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
