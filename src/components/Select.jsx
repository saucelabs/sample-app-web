import React from "react";
import PropTypes from "prop-types";
import "./Select.css";

const Select = ({ activeOption, onChange, options, testId }) => {
  return (
    <span className="select_container">
      <span className="active_option">
        {
          options[options.findIndex((option) => option.key === activeOption)]
            .value
        }
      </span>
      <select
        onChange={onChange}
        className="product_sort_container"
        value={activeOption}
        {...(testId
          ? {
              "data-test": testId,
            }
          : {})}
      >
        {options.map(({ key, value }) => (
          <option value={key} key={key}>
            {value}
          </option>
        ))}
      </select>
    </span>
  );
};
Select.propTypes = {
  /**
   * The active option key
   */
  activeOption: PropTypes.string.isRequired,
  /**
   * The on change handler
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The options
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * The test id
   */
  testId: PropTypes.string,
};
Select.defaultProps = {
  testId: undefined,
};

export default Select;
