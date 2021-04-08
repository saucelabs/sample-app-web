import React from "react";
import PropTypes from "prop-types";
import "./SubmitButton.css";

const SubmitButton = ({ customClass, testId, value, ...props }) => {
  const extraClass = customClass ? ` ${customClass}` : "";
  return (
    <input
      type="submit"
      className={`submit-button${extraClass}`}
      value={value}
      {...(testId
        ? {
            "data-test": testId,
            id: testId,
            name: testId,
          }
        : {})}
      {...props}
    />
  );
};

SubmitButton.propTypes = {
  /**
   * A custom class
   */
  customClass: PropTypes.string,
  /**
   * The test id
   */
  testId: PropTypes.string,
  /**
   * The value of the input
   */
  value: PropTypes.string.isRequired,
};

SubmitButton.defaultProps = {
  customClass: undefined,
  testId: undefined,
};

export default SubmitButton;
