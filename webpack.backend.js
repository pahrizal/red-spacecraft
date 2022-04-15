const path = require("path");

const nodeExternals = require("webpack-node-externals");

const entry = { index: "./src/backend/index.ts" };

module.exports = {
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
  target: "node",
  devtool: "inline-source-map",
  entry: entry,
  output: {
    path: path.resolve(__dirname, "api"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  // don't compile node_modules
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              // use the tsconfig in the backend directory
              configFile: "src/backend/tsconfig.json",
            },
          },
        ],
      },
    ],
  },
};
