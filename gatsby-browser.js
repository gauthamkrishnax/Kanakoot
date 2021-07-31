require("./src/styles/global.scss");

const React = require("react");
const Layout = require("./src/components/layout/Layout").default;

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};
