module.exports = {
  pathPrefix: "/aemivore",
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/assets/horse-icon.png",
      },
    },
    `gatsby-plugin-fontawesome-css`,
  ],
};
