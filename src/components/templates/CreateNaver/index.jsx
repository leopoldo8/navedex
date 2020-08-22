import React from 'react';

import NaverForm from '@components/organisms/NaverForm';
import PageHead from '@components/atoms/PageHead';

const CreateTemplate = () => (
  <>
    <PageHead title="Adicionar um Naver" />
    <NaverForm type="create" />
  </>
);

export default CreateTemplate;
