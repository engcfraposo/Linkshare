import React from 'react';
import { Container } from './styles';

import LoginComponent from '../../components/LoginComponent';

const SingIn: React.FC = () => {
  return (
    <>
      <Container>
        <LoginComponent />
      </Container>
    </>
  );
};

export default SingIn;
