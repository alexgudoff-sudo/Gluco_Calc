const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Это заставит сборщик понимать, что @/ — это корень вашего проекта
config.resolver.alias = {
  '@': path.resolve(__dirname, './'),
};

module.exports = config;
