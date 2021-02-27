import React from "react";
import PropTypes from "prop-types";
import "./SecondaryHeader.css";

const SecondaryHeader = ({
  headerBot,
  leftComponent,
  rightComponent,
  title,
}) => {
  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const HeaderBot = () => <div className="peek" />;
  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const LeftComponent = ({ leftComponent }) => (
    <div className="left_component">{React.cloneElement(leftComponent)}</div>
  );
  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const RightComponent = ({ rightComponent }) => (
    <div className="right_component">{React.cloneElement(rightComponent)}</div>
  );
  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const Title = ({ title }) => <span className="title">{title}</span>;

  return (
    <div className="header_secondary_container">
      {leftComponent && <LeftComponent leftComponent={leftComponent} />}
      {title && <Title title={title} />}
      {headerBot && <HeaderBot />}
      {rightComponent && <RightComponent rightComponent={rightComponent} />}
    </div>
  );
};
SecondaryHeader.propTypes = {
  /**
   * Show the header bot
   */
  headerBot: PropTypes.bool,
  /**
   * A react component for the left
   */
  leftComponent: PropTypes.element,
  /**
   * A react component for the right
   */
  rightComponent: PropTypes.element,
  /**
   * A title
   */
  title: PropTypes.string,
};
SecondaryHeader.defaultProps = {
  headerBot: undefined,
  leftComponent: undefined,
  rightComponent: undefined,
  title: undefined,
};

export default SecondaryHeader;
