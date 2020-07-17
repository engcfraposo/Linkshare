/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useCallback } from 'react';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SingupLinkComponent from './SingupLinkComponent';
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
  name: yup.string().min(5, 'Minimo de 5 caracteres').required('requerido'),
  originalname: yup.string().required('requerido'),
  fantasyname: yup.string().required('requerido'),
  email: yup
    .string()
    .email('Email invalido')
    .min(5, 'Minimo de 5 caracteres')
    .required('requerido'),
  cnpj: yup.number().min(14, 'Cnpj invalido!').required('requerido'),
  password: yup.string().min(8, 'Minimo de 8 caracteres').required('requerido'),
});

const initialValues = {};
const SingupComponent: React.FC = () => {
  const handleSubmit = useCallback(async data => {
    const { cnpj, password, email, name, fantasyname, originalname } = data;

    const response = api.post('users', {
      cnpj,
      password,
      email,
      name,
      fantasyname,
      originalname,
      token: 'asddeaf',
      admin: false,
    });

    alert(response);
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
            Cadastrar
          </Typography>
          <FormikGroup>
            <FormikField
              name="name"
              id="name"
              placeholder="Nome Completo"
              label="name"
              type="text"
            />
            <FormikError component="span" name="name" />
          </FormikGroup>
          <FormikGroup>
            <FormikField
              name="originalname"
              id="originalname"
              placeholder="Razão Social"
              label="originalname"
              type="text"
            />
            <FormikError component="span" name="originalname" />
          </FormikGroup>
          <FormikGroup>
            <FormikField
              name="fantasyname"
              id="fantasyname"
              placeholder="Nome fantasia da empresa"
              label="fantasyname"
              type="text"
            />
            <FormikError component="span" name="fantasyname" />
          </FormikGroup>
          <FormikGroup>
            <FormikField
              name="email"
              id="email"
              placeholder="Email"
              label="email"
              type="text"
            />
            <FormikError component="span" name="email" />
          </FormikGroup>
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
            Cadastrar
          </Button>
        </FormikForm>
      </FormikContainer>
      <SingupLinkComponent />
    </Container>
  );
};

export default SingupComponent;
