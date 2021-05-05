import React from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";

const Feedback = ({ values, incrementFunction }) => {
  return (
    <>
      <FeedbackOptions options={values} onLeaveFeedback={incrementFunction} />
    </>
  );
};
Feedback.propTypes = {
  values: PropTypes.array,
  incrementFunction: PropTypes.func,
};

export default Feedback;
