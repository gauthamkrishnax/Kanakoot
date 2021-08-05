module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Kanakoot",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },

    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Lato",
            file: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;1,400&display=swap",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-GKBJGBGQMJ"],
      },
    },
  ],
};
