# Ares - React Scaffolding

This is the subtitution for the CRA, created using Webpack and Babel.

Webpack: used to bundle the javascript files into one bundle file.

Babel: used to enable recent javascript features that are not supported by many browsers.

## Installation

### React with Babel + Webpack

1. `yarn add react react-dom`, installation for react library

2. `yarn add -D @babel/preset-react @babel/preset-env @babel/core babel-loader html-loader style-loader webpack webpack-cli webpack-dev-server`, preparation for webpack config file. 

> `babel-loader` is used to transpile javascript file with babel and webpack, `babel-loader` uses `@babel/core`. Inside `babel-loader` include options preset `@babel/preset-react` and `@babel/preset-env` 

> `html-loader` is for html parsing

> `style-loader` inject css into the DOM

