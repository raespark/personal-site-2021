/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allJson {
                edges {
                    node {
                        url
                    }
                }
            }
        }
    `);

    result.data.allJson.edges.forEach(({ node }) => {
        createPage({
            path: `/projects/${node.url}`,
            component: path.resolve(`./src/templates/projectPageTemplate.tsx`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.url,
            },
        });
    });
};
