# Ares - React Scaffolding

This is the subtitution for the CRA, created using Webpack and Babel.

> Webpack: used to bundle the javascript files into one bundle file.

> Babel: used to enable recent javascript features that are not supported by many browsers.

## Installation

### React with Babel + Webpack

1. `yarn add react react-dom`, installation for react library

2. `yarn add -D @babel/preset-react @babel/preset-env @babel/core babel-loader css-loader file-loader style-loader url-loader webpack webpack-cli webpack-dev-server`, preparation for webpack config file. 

    > `babel-loader` is used to transpile javascript file with babel and webpack, `babel-loader` uses `@babel/core`. Inside `babel-loader` include options preset `@babel/preset-react` and `@babel/preset-env` 

    > `css-loader style-loader` inject css into the DOM

    > `url-loader` for load image from assets, help you to use `require()` in jsx syntax

    > `webpack-dev-server` is used to run on development

3. `yarn add -D webpack-merge html-webpack-plugin clean-webpack-plugin`, preparation for config inside webpack

    > `webpack-merge` enables to group common webpack config

    > `html-webpack-plugin` helps to copy the html file

    > `clean-webpack-plugin` removes the build file each iteration

### React with Redux

1. `yarn add redux react-redux redux-thunk`

    > `redux` is the core, just to make it clear, `redux` is a state container for javascript apps, created not just for react
    
    > `react-redux` is the binding for redux and react

    > `redux-thunk` is used to delay something
