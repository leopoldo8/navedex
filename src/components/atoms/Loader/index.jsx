import React from 'react';
import PropTypes from 'prop-types';

import { LoaderIMG } from './style';

const LoaderSVG = '/static/images/Loader.svg';
const DarkLoaderSVG = '/static/images/Dark-Loader.svg';

const Loader = ({ size, theme }) => (
  <LoaderIMG src={theme === 'dark' ? DarkLoaderSVG : LoaderSVG} draggable={false} size={size} />
);

Loader.propTypes = {
  size: PropTypes.oneOf(['large', 'medium']),
  theme: PropTypes.oneOf(['dark', 'light'])
}

Loader.defaultProps = {
  size: 'medium',
  theme: 'light'
}

export default Loader;
