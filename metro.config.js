const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Этот блок заставляет Metro понимать, что @/ — это корень вашего проекта
config.resolver.alias = {
  '@': path.resolve(__dirname, './'),
};

module.exports = config;
