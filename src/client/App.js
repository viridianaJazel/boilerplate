import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/index';
import './style/main.scss';

class App extends React.PureComponent {
  render() {
    const { location, children } = this.props;
    return (
      <div className="container-fluid">
        <Header location={location} />
        <main>
          {children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default App;
