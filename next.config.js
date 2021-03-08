module.exports = {
  i18n: {
    locales: ["ru-RU", "ru", "en-US", "en"],
    defaultLocale: "en",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po/,
      use: [
        {
          loader: "@lingui/loader",
        },
      ],
    });

    return config;
  },
};
