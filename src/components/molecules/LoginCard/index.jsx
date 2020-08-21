import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Input from '@components/atoms/TextInput';
import Button from '@components/atoms/Button';

import {
  FieldContainer,
  FormContainer
} from './style';

const LoginCard = ({ handleEnterSubmit, loading }) => {
  const [loaded, setLoaded] = useState(false);

  const validationEnterSchema = Yup.object({
    email: Yup.string().required('Por favor, preencha o campo com um e-mail válido'),
    password: Yup.string().required('Por favor, preencha o campo com uma senha válida')
  });

  useEffect(() => setLoaded(true), []);

  const content = ({ handleSubmit, handleChange, values, errors, setFieldError }) => {
    const onChange = (event, name) => {
      setFieldError(name, '');
      handleChange(event);
    }

    return (
      <FormContainer loaded={loaded} onSubmit={handleSubmit}>
        <i className="icon-logo" />
        <FieldContainer error={errors.email}>
          <Input
            name="email"
            id="email"
            title="E-mail"
            value={values.email}
            placeholder="E-mail"
            autocomplete="email"
            error={errors.email}
            onChange={e => onChange(e, 'email')}
          />
        </FieldContainer>
        <FieldContainer error={errors.password}>
          <Input
            name="password"
            id="password"
            type="password"
            value={values.password}
            title="Senha"
            placeholder="Senha"
            autocomplete="current-password"
            error={errors.password}
            onChange={e => onChange(e, 'password')}
          />
        </FieldContainer>
        <Button type="submit" label="Entrar" loading={loading} />
      </FormContainer>
    );
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleEnterSubmit}
      validationSchema={validationEnterSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {content}
    </Formik>
  );
}

LoginCard.propTypes = {
  handleEnterSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

LoginCard.defaultProps = {
  loading: false
}

export default LoginCard;
