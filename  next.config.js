module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: config => {
    config.node = {
      fs: "empty"
    };

    return config;
  }
};
