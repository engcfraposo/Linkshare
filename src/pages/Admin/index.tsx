import React, { useEffect, useState } from 'react';
import { MdDelete, MdBuild } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { IProduct } from '../../store/modules/cart/types';
import api from '../../services/api';
import { Container, ProductTable } from './styles';
import { formatPrice } from '../../utils/format';

const Cart: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const response = await api.get<IProduct[]>('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    })();
  }, []);

  const handleDelete = async (id: number) => {
    await api.delete<IProduct[]>(`/products/${id}`);
    return (window.location.href = '/Admin');
  };

  const handleEdit = async (product: IProduct) => {
    const { id, title, image, price } = product;

    const product_id = String(id);
    const product_price = String(price);

    localStorage.setItem('@LinkShare:id', product_id);
    localStorage.setItem('@LinkShare:title', title);
    localStorage.setItem('@LinkShare:image', image);
    localStorage.setItem('@LinkShare:price', product_price);

    history.push('/EditProduct');
  };

  const handleCreate = (event: React.SyntheticEvent) => {
    event.preventDefault();
    history.push('/CreateProduct');
  };

  return (
    <>
      <Container>
        <ProductTable>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <img
                    src={require(`../../assets/${product.image}.jpg`)}
                    alt={product.image}
                  />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <button onClick={() => handleEdit(product)}>
                    <MdBuild size={20} color="#3f51b5" />
                  </button>
                  <button onClick={() => handleDelete(product.id)}>
                    <MdDelete size={20} color="#3f51b5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <Button variant="outlined" color="primary" onClick={handleCreate}>
            Cadastrar
          </Button>
        </footer>
      </Container>
    </>
  );
};

export default Cart;
