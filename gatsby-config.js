module.exports = {
    siteMetadata: {
        title: `Rachael Metcalf - Software Engineer`,
        description: `Professional UI/Front End/Full Stack Engineer since 2017. Passionate about delivering great user experiences.`,
        author: `@raesparkgames`,
        image: `/images/preview-image.png`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `rmetcalf-website`,
                short_name: `rmetcalf`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#FFA5A5`,
                display: `standalone`,
                icon: `static/images/face-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,

        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: 'Open+Sans',
                            variants: ['300', '400', '600', '700'],
                        },
                        {
                            family: 'Montserrat',
                            variants: ['300', '400', '600', '700'],
                        },
                    ],
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/`,
            },
        },
        {
            resolve: `gatsby-transformer-json`,
            options: {
                typeName: `Json`, // a fixed string
            },
        },
        `gatsby-transformer-sharp`,

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
