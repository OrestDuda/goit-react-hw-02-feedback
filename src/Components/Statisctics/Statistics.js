import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, positivePercentage, total }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedbacks: {positivePercentage} %</p>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
