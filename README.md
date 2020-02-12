# Ares - React Scaffolding

This is the subtitution for the CRA, created using Webpack and Babel.

Webpack: used to bundle the javascript files into one bundle file.

Babel: used to enable recent javascript features that are not supported by many browsers.

## Installation

### React with Babel + Webpack

1. `yarn add react react-dom`, installation for react library

2. `yarn add -D @babel/preset-react @babel/preset-env @babel/core babel-loader style-loader webpack webpack-cli webpack-dev-server`, preparation for webpack config file. 

    > `babel-loader` is used to transpile javascript file with babel and webpack, `babel-loader` uses `@babel/core`. Inside `babel-loader` include options preset `@babel/preset-react` and `@babel/preset-env` 

    > `style-loader` inject css into the DOM

    > `webpack-dev-server` is used to run on development

3. `yarn add -D webpack-merge html-webpack-plugin clean-webpack-plugin`, preparation for config inside webpack

    > `webpack-merge` enables to group common webpack config

    > `html-webpack-plugin` helps to copy the html file

    > `clean-webpack-plugin` removes the build file each iteration