module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async () => {
    return {
      "/": { page: "/" },
      "/about": { page: "/" },
    };
  },
};
