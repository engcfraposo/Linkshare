/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useCallback } from 'react';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { formatPrice } from '../../utils/format';
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
  title: yup.string().min(5, 'Minimo de 5 caracteres'),
  price: yup.number().min(14, 'Cnpj invalido!'),
});

const EditProductComponent: React.FC = () => {
  const history = useHistory();

  const token = localStorage.getItem('@LinkShare:token');
  const admin = localStorage.getItem('@LinkShare:user');
  const product_id = localStorage.getItem('@LinkShare:id');
  const product_title = localStorage.getItem('@LinkShare:title');
  const product_image = localStorage.getItem('@LinkShare:image');
  const product_price = localStorage.getItem('@LinkShare:price');

  const id = Number(product_id);

  const handleSubmit = useCallback(
    async (data: any) => {
      const { title, price } = data;

      // imagem não trocado por questão de estetica.
      await api.put(`products/${id}`, {
        image: 'ead',
        title,
        price: Number(price),
        headers: {
        },
      });

      alert('Produto editado!');
      history.push('/Admin');
    },
    [history, id, token, admin],
  );

  const handleCancel = (event: React.SyntheticEvent) => {
    event.preventDefault();
    return history.push('/Admin');
  };

  const initialValues = {
    title: product_title,
    price: Number(product_price),
  };

  return (
    <Container maxWidth="md">
      <FormikContainer
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <FormikForm>
          <Typography component="h1" variant="h5" color="primary">
            Editar Produto
          </Typography>
          <FormikGroup>
            <FormikField
              name="photo"
              id="photo"
              placeholder={product_image}
              label="photo"
              type="file"
              accept="image/*"
            />
            <FormikError component="span" name="photo" />
          </FormikGroup>
          <FormikGroup>
            <FormikField
              name="title"
              id="title"
              placeholder={product_title}
              label="title"
              type="text"
            />
            <FormikError component="span" name="title" />
          </FormikGroup>
          <FormikGroup>
            <FormikField
              name="price"
              id="price"
              placeholder={formatPrice(Number(product_price))}
              label="price"
              type="text"
            />
            <FormikError component="span" name="password" />
          </FormikGroup>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Editar
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCancel}
              >
                Voltar
              </Button>
            </Grid>
          </Grid>
        </FormikForm>
      </FormikContainer>
    </Container>
  );
};

export default EditProductComponent;
