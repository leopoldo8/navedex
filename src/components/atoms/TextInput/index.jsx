import React from 'react';
import PropTypes from 'prop-types';

import { Input, Label, ErrorLabel } from './style';

/**
 * The TextInput Atom have 3 different sizes using the size prop: large, medium, and small.
 * You can define the title that stands above the input using the title prop.
 * You can also define an error message using the error prop.
 */
const TextInput = ({ title, error, ...props }) => {
  return (
    <>
      <Label htmlFor={props.id}>
        { title }
      </Label>
      <Input
        error={error}
        {...props}
      />
      {error && typeof error === 'string' ? (
        <ErrorLabel>
          { error }
        </ErrorLabel>
      ) : null}
    </>
  )
}

TextInput.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  title: PropTypes.string.isRequired
}

TextInput.defaultProps = {
  error: null,
  size: 'medium'
}

export default TextInput;
