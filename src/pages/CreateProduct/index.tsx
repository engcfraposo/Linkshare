import React from 'react';

import CreateProductComponent from '../../components/CreateProductComponent';

import { Container } from './styles';

const CreateProduct: React.FC = () => {
  return (
    <Container>
      <CreateProductComponent />
    </Container>
  );
};

export default CreateProduct;
