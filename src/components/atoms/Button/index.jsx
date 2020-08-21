import React from 'react';
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader';

import { StyledButton } from './style';

const Button = ({ schema, label, loading, ...props }) => {
  const Content = () => {
    if (loading)
      return <Loader />;

    return label;
  }

  return (
    <StyledButton schema={schema} loading={loading ? 1 : 0} {...props}>
      <Content />
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  schema: PropTypes.oneOf(['solid', 'outline']),
  loading: PropTypes.bool
}

Button.defaultProps = {
  schema: 'solid',
  loading: false
}

export default Button;
