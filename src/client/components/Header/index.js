import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import './style.scss';

/**
* Header component. Represents a generic menu
*/
class Header extends Component {
  /**
    * construct Constructor of Header Component
    * @param {json} props props of the component
    * @returns {json} this value of the component
  */
  constructor(props) {
    super(props);
  }
  /**
    * Header Component render method
    * @returns {ReactElement} markup
  */
  render() {
    return (
      <header>

        <div className="brand">
          <a href="/">
            <i className="brand brand-logo" />
            <span className="brand-name">
              Hello
            </span>
          </a>
        </div>

      </header>
    );
  }
}


Header.propTypes = {
  location: PropTypes.object,
};

Header.defaultProps = {
  location: {},
};

export default Header;
