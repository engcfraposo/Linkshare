import React, { useCallback } from 'react';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import api from '../../services/api';

import {
  FormikError,
  FormikContainer,
  FormikField,
  FormikForm,
  FormikGroup,
} from './styles';

const validations = yup.object().shape({
  title: yup.string().min(5, 'Minimo de 5 caracteres').required('requerido'),
  price: yup.number().min(14, 'Cnpj invalido!').required('requerido'),
});

const initialValues = {};
const CreateProductComponent: React.FC = () => {
  const handleSubmit = useCallback(async (data: any) => {
    const { title, price } = data;

    await api.post('products', {
      image: 'ead',
      title,
      price,
    });

    alert('Produto Criado!');
    return (window.location.href = '/Admin');
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
            Cadastrar Produto
          </Typography>
          <FormikGroup>
            <FormikField
              name="photo"
              id="photo"
              placeholder="Foto do Produto"
              label="photo"
              type="file"
              accept="image/*"
            />
            <FormikError component="span" name="cnpj" />
          </FormikGroup>
          <FormikGroup>
            <FormikField
              name="title"
              id="title"
              placeholder="Titulo"
              label="title"
              type="text"
            />
            <FormikError component="span" name="cnpj" />
          </FormikGroup>
          <FormikGroup>
            <FormikField
              name="price"
              id="price"
              placeholder="Preço"
              label="price"
              type="text"
            />
            <FormikError component="span" name="password" />
          </FormikGroup>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Cadastrar
          </Button>
        </FormikForm>
      </FormikContainer>
    </Container>
  );
};

export default CreateProductComponent;
