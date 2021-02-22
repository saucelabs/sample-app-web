import React from "react";
import PropTypes from "prop-types";
import "./SubmitButton.css";

const SubmitButton = ({ testId, value, ...props }) => {
  return (
    <input
      type="submit"
      // `btn_action` has no style function
      // but is there for backwards compatibility
      className="submit-button btn_action"
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
   * The test id
   */
  testId: PropTypes.string,
  /**
   * The value of the input
   */
  value: PropTypes.string.isRequired,
};

SubmitButton.defaultProps = {
  testId: undefined,
};

export default SubmitButton;
