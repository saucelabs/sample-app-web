import React from "react";
import PropTypes from "prop-types";
import "./HeaderContainer.css";
import DrawerMenu from "./DrawerMenu";
import CartButton from "./CartButton";

const HeaderContainer = ({
  secondaryHeaderBot,
  secondaryLeftComponent,
  secondaryRightComponent,
  secondaryTitle,
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
    <div id="header_container" className="header_container">
      <div className="primary_header">
        <div id="menu_button_container">
          <DrawerMenu />
        </div>
        <div className="header_label">
          <div className="app_logo" />
        </div>
        <div id="shopping_cart_container" className="shopping_cart_container">
          <CartButton />
        </div>
      </div>
      <div className="header_secondary_container">
        {secondaryLeftComponent && (
          <LeftComponent leftComponent={secondaryLeftComponent} />
        )}
        {secondaryTitle && <Title title={secondaryTitle} />}
        {secondaryHeaderBot && <HeaderBot />}
        {secondaryRightComponent && (
          <RightComponent rightComponent={secondaryRightComponent} />
        )}
      </div>
    </div>
  );
};
HeaderContainer.propTypes = {
  /**
   * Show the header bot
   */
  secondaryHeaderBot: PropTypes.bool,
  /**
   * A react component for the left
   */
  secondaryLeftComponent: PropTypes.element,
  /**
   * A react component for the right
   */
  secondaryRightComponent: PropTypes.element,
  /**
   * A title
   */
  title: PropTypes.string,
};
HeaderContainer.defaultProps = {
  secondaryHeaderBot: undefined,
  secondaryLeftComponent: undefined,
  secondaryRightComponent: undefined,
  secondaryTitle: undefined,
};

export default HeaderContainer;
