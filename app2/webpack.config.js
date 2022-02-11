const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/", // Added this
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      library: { type: "var", name: "app2" },
      filename: "remoteEntry.js",
      exposes: {
        // expose each component you want
        "./App": "./src/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        // "@emotion/react": {
        //   singleton: true,
        //   requiredVersion: deps['@emotion/react'],
        // },
        // "@emotion/styled": {
        //   singleton: true,
        // },
        // "@mui/icons-material":{
        //   singleton: true,
        // },
        // "@mui/material": {
        //   singleton: true,
        // },
        // "@mui/styled-engine-sc": {
        //   singleton: true,
        // },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
