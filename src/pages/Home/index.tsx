import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import { IProduct } from '../../store/modules/cart/types';
import { CartDispatcher } from '../../store/modules/cart/action';

import { ProductList } from './styles';
import { RootState } from '../../store/modules/rootReducer';
import UpperComponent from '../../components/UpperComponent';

interface IAmount {
  [key: number]: number;
}

const Home: React.FC = () => {
  const token = localStorage.getItem('@LinkShare:token');
  const [products, setProducts] = useState<IProduct[]>([]);

  const cartState = useSelector((state: RootState) => {
    const amounts = state.cart.reduce((total: IAmount, product): IAmount => {
      total[product.id] = product.amount;

      return total;
    }, {});

    return {
      cart: state.cart,
      amounts,
    };
  });

  const cartDispatcher = new CartDispatcher();

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

  return (
    <>
      {!token ? <UpperComponent /> : <></>}
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img
              src={require(`../../assets/${product.image}.jpg`)}
              alt={product.title}
            />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => {
                cartDispatcher.addToCart(product);
              }}
            >
              <div>
                <MdAddShoppingCart color="#fff" size={16} />
                {cartState.amounts[product.id] || 0}
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
};

export default Home;
