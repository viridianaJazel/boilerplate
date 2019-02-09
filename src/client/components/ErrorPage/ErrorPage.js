import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ErrorMessages from './ErrorMessages';

/**
* ErrorPage component. Represents a Generic Error Page
*/
class ErrorPage extends React.PureComponent {
  /**
    * ErrorPage Component render method
    * @returns {ReactElement} markup
  */
  render() {
    const { error } = this.props;
    const {
      title,
      description
    } = ErrorMessages[error];

    return (
      <section className="error-page container">
        <div className="error-page_title">
          <h2>{title}</h2>
        </div>
        <div className="error-page_description">
        {
          description.map(( item, i ) => <p key={i}>{item}</p>)
        }
        </div>
      </section>
    );
  }
}

ErrorPage.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorPage;
