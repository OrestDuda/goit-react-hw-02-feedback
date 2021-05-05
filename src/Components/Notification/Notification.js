import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  return <h3 className={styles.text}>{message}</h3>;
};
Notification.defaultProps = {
  message: "No feedback given",
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
