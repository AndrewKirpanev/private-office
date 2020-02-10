import React from "react";
import PropTypes from "prop-types";
import styles from "./layout-main.module.scss";

const LayoutMain = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutMain;
