module.exports = {
  siteMetadata: {
    title: 'KIP',
    description:
      'An affordable, open-source 3D-printed robot for teaching students of all ages.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'KIP Kit',
        short_name: 'KIP',
        start_url: '/',
        background_color: '#F2FF4D',
        theme_color: '#F2FF4D',
        display: 'minimal-ui',
        icon: 'src/assets/images/kip-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
