import * as React from 'react';

import SEO from '../components/seo';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';

import '../global.scss';
import '../components/layout.css';

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <div className="not-found-page">
            <div className="not-found-page-content">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Not Found</h2>
                <hr className="not-found-hr" />
                <div className="not-found-text">
                    Sorry, doesn't look like the page you were looking for
                    exists.
                </div>
                <LinkButton
                    className="back-home-button"
                    link="/"
                    text="Back Home"
                    inverse
                />
            </div>
            <Footer />
        </div>
    </>
);

export default NotFoundPage;
