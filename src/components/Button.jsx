import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import backPng from "../assets/img/arrow.png";

export const BUTTON_TYPES = {
  ACTION: "action",
  BACK: "secondary back",
  PRIMARY: "primary",
  SECONDARY: "secondary",
};
export const BUTTON_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};
const Button = ({
  customClass,
  label,
  onClick,
  size,
  testId,
  type,
  ...props
}) => {
  const buttonTypeClass = ` btn_${type}`;
  const extraClass = customClass ? ` ${customClass}` : "";
  const buttonSize = ` btn_${size}`;
  /* istanbul ignore next */
  const BackImage = () => (
    <img src={backPng} className="back-image" alt="Go back" />
  );

  return (
    <button
      className={`btn${buttonTypeClass}${buttonSize}${extraClass}`}
      {...(testId
        ? {
            "data-test": testId,
            id: testId,
            name: testId,
          }
        : {})}
      onClick={onClick}
      {...props}
    >
      {type === BUTTON_TYPES.BACK && <BackImage />}
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * A custom class
   */
  customClass: PropTypes.string,
  /**
   * The label
   */
  label: PropTypes.string.isRequired,
  /**
   * The on click handler
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  /**
   * The test id
   */
  testId: PropTypes.string,
  /**
   * What type of field is it
   */
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
};

Button.defaultProps = {
  customClass: undefined,
  size: BUTTON_SIZES.LARGE,
  testId: undefined,
  type: BUTTON_TYPES.PRIMARY,
};

export default Button;
