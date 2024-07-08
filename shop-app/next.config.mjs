import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shop_app',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Products': './components/Products.js',
          './category': './pages/category/index.js',
          './books': './pages/books/index.js',
        },
        extraOptions: {
          debug: false,
          exposePages: false,
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;