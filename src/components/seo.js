/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        image
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata?.title;
    const image = `https://rmetcalf.netlify.app/${site.siteMetadata.image}`;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: 'image',
                    content: image,
                },
                {
                    property: `og:title`,
                    content: defaultTitle,
                },
                {
                    property: 'og:site_name',
                    content: defaultTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: 'og:image',
                    content: image,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: defaultTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: 'twitter:image',
                    content: image,
                },
            ].concat(meta)}
        ></Helmet>
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
