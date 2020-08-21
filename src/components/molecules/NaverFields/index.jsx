import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Input from '@components/atoms/TextInput';
import Button from '@components/atoms/Button';

import {
  FieldContainer,
  FormContainer,
  FieldsContainer,
  ButtonContainer,
  Row
} from './style';

const NaverFields = ({ onSubmit, loading, initialData }) => {
  const fields = [{
    name: 'name',
    placeholder: 'Nome',
    title: 'Nome'
  }, {
    name: 'job_role',
    placeholder: 'Cargo',
    title: 'Cargo'
  }, {
    name: 'birthdate',
    placeholder: 'Idade',
    title:'Idade'
  }, {
    name: 'admission_date',
    placeholder: 'Tempo de empresa',
    title: 'Tempo de empresa'
  }, {
    name: 'project',
    placeholder: 'Projetos que participou',
    title: 'Projetos que participou'
  }, {
    name: 'url',
    placeholder: 'URL da foto do Naver',
    title: 'URL da foto do Naver'
  }];

  const validationSchema = Yup.object({
    name: Yup.string().required(true),
    job_role: Yup.string().required(true),
    birthdate: Yup.string().required(true),
    admission_date: Yup.string().required(true),
    project: Yup.string().required(true),
    url: Yup.string().required(true)
  });

  const content = ({ handleSubmit, handleChange, values, errors, setFieldError, resetForm }) => {
    const onChange = (event, name) => {
      setFieldError(name, '');
      handleChange(event);
    }

    return (
      <FormContainer onSubmit={handleSubmit}>
        <FieldsContainer>
          {fields.map(field =>
            <FieldContainer error={errors[field.name]} key={field.name}>
              <Input
                name={field.name}
                id={field.name}
                title={field.title}
                value={values[field.name] || ''}
                placeholder={field.placeholder}
                error={errors[field.name]}
                onChange={e => onChange(e, field.name)}
              />
            </FieldContainer>
          )}
        </FieldsContainer>
        <Row>
          <ButtonContainer>
            <Button type="submit" label="Salvar" loading={loading} />
          </ButtonContainer>
        </Row>
      </FormContainer>
    );
  }

  const filterInitialData = (data) => {
    if (!data) return {};

    const allowed = fields.map(field => field.name);

    return Object.keys(data)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});
  }

  return (
    <Formik
      initialValues={filterInitialData(initialData)}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize
    >
      {content}
    </Formik>
  );
}

NaverFields.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  initialData: PropTypes.shape({
    name: PropTypes.string,
    job_role: PropTypes.string,
    birthdate: PropTypes.string,
    admission_date: PropTypes.string,
    project: PropTypes.string,
    url: PropTypes.string
  })
}

NaverFields.defaultProps = {
  loading: false,
  initialData: {}
}

export default NaverFields;
