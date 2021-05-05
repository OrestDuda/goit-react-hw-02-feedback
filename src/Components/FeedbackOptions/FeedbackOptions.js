import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttons}>
      {options.map((value) => (
        <button
          value={value}
          key={value}
          onClick={onLeaveFeedback}
          className={styles.button}
        >
          {value}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
