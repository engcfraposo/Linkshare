/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useCallback } from 'react';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LoginLinkComponent from './LoginLinkComponent';
import api from '../../services/api';
// import {useAuth} from '../../hooks/AuthContext' //Em Caso de utilizar Backend com JWT
// import {useToast} from '../../hooks/ToastContext' //Em Caso de utilizar Backend com JWT
import {
  FormikError,
  FormikContainer,
  FormikField,
  FormikForm,
  FormikGroup,
} from './styles';

const validations = yup.object().shape({
  cnpj: yup.number().min(14, 'Cnpj invalido!').required('requerido'),
  password: yup.string().min(8, 'Minimo de 8 caracteres').required('requerido'),
});

const initialValues = {};
const LoginComponent: React.FC = () => {
  // const { signIn } = useAuth(); //Em Caso de utilizar Backend com JWT
  // const { addToast } = useToast(); //Em Caso de utilizar Backend com JWT

  /** const handleSubmit = useCallback(async (data)  => { 
    const {cnpj, password} = data;
    signIn({ cnpj, password }) 
    return history.push('/') */

  const handleSubmit = useCallback(async data => {
    const { cnpj, password } = data;

    const response = await api.get('users', { params: { cnpj } });

    if (response.data.length === 0) {
      alert('Usuario não existe!');
    }

    const { token, admin } = response.data[0];

    localStorage.setItem('@LinkShare:admin', admin);
    localStorage.setItem('@LinkShare:token', token);

    // signIn({ cnpj, password }) //Em Caso de utilizar Backend com JWT
    await api.post('sessions', {
      cnpj,
      password,
    });

    return (window.location.href = '/');
  }, []);

  return (
    <Container maxWidth="md">
      <FormikContainer
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <FormikForm>
          <Typography component="h1" variant="h5" color="primary">
            Entrar
          </Typography>
          <FormikGroup>
            <FormikField
              name="cnpj"
              id="cnpj"
              placeholder="CNPJ"
              label="cnpj"
              type="text"
            />
            <FormikError component="span" name="cnpj" />
          </FormikGroup>
          <FormikGroup>
            <FormikField
              name="password"
              id="password"
              placeholder="Password"
              label="password"
              type="password"
            />
            <FormikError component="span" name="password" />
          </FormikGroup>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Entrar
          </Button>
        </FormikForm>
      </FormikContainer>
      <LoginLinkComponent />
    </Container>
  );
};

export default LoginComponent;
