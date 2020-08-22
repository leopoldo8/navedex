import React from 'react';

import NaverForm from '@components/organisms/NaverForm';
import PageHead from '@components/atoms/PageHead';

const EditTemplate = () => (
  <>
    <PageHead title="Editar um Naver" />
    <NaverForm type="edit" />
  </>
);

export default EditTemplate;
