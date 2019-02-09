import React from 'react';
import PropTypes from 'prop-types';
import { library as fontLibrary } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

fontLibrary.add(fas, far, fab);

class Icon extends React.PureComponent {
  render() {
    const { library, icon } = this.props;

    if (library && icon) {
      return <FontAwesomeIcon icon={{ prefix: library, iconName: icon }} />;
    }

    return <i />;
  }
}

Icon.propTypes = {
  library: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Icon;
