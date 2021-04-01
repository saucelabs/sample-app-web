import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./InputError.css";

export const INPUT_TYPES = {
  TEXT: "text",
  PASSWORD: "password",
};
const InputError = ({
  isError,
  onChange,
  placeholder,
  testId,
  type,
  value,
  ...props
}) => {
  return (
    <div className="form_group">
      <input
        // `form_input` has no style function
        // but is there for backwards compatibility
        className={`input_error form_input${isError ? " error" : ""}`}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
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
      {isError && (
        <FontAwesomeIcon icon={faTimesCircle} className="error_icon" />
      )}
    </div>
  );
};

InputError.propTypes = {
  /**
   * If this is an isError field yes or no
   */
  isError: PropTypes.bool.isRequired,
  /**
   * The on change handler
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The placeholder of the input
   */
  placeholder: PropTypes.string,
  /**
   * The test id
   */
  testId: PropTypes.string,
  /**
   * What type of field is it
   */
  type: PropTypes.oneOf(["text", "password"]),
  /**
   * The value of the input
   */
  value: PropTypes.string,
};

InputError.defaultProps = {
  placeholder: "",
  testId: undefined,
  type: INPUT_TYPES.TEXT,
  value: "",
};

export default InputError;
