const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Принудительно настраиваем алиас @/
config.resolver.alias = {
  '@': path.resolve(__dirname, './'),
};

module.exports = config;
