import React from 'react';
import { useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { RootState } from '../../store/modules/rootReducer';
import { CartDispatcher } from '../../store/modules/cart/action';

import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../utils/format';

interface ITotal {
  total: number;
}

const Cart: React.FC = () => {
  const cartState = useSelector((state: RootState) => {
    state.cart = state.cart.map(product => ({
      ...product,
      subTotal: product.amount * product.price,
    }));

    const totalPrice = state.cart.reduce((total_price, transation): number => {
      return total_price + transation.price * transation.amount;
    }, 0);

    return {
      totalPrice: formatPrice(totalPrice),
      cart: state.cart,
    };
  });
  const cartDispatcher = new CartDispatcher();

  function handleDeleteOfCart(id: number) {
    cartDispatcher.removeFromCart(id);
  }

  return (
    <>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cartState.cart.map(cart => (
              <tr key={cart.id}>
                <td>
                  <img
                    src={require(`../../assets/${cart.image}.jpg`)}
                    alt={cart.image}
                  />
                </td>
                <td>
                  <strong>{cart.title}</strong>
                  <span>{cart.priceFormatted}</span>
                </td>

                <td>
                  <div>
                    <button
                      onClick={() => {
                        cartDispatcher.updateAmount({
                          amount: cart.amount - 1,
                          id: cart.id,
                        });
                      }}
                    >
                      <MdRemoveCircleOutline size={20} color="#3f51b5" />
                    </button>
                    <input type="number" readOnly value={cart.amount} />
                    <button
                      onClick={() => {
                        cartDispatcher.updateAmount({
                          amount: cart.amount + 1,
                          id: cart.id,
                        });
                      }}
                    >
                      <MdAddCircleOutline size={20} color="#3f51b5" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{formatPrice(cart.amount * cart.price)}</strong>
                </td>
                <td>
                  <button onClick={() => handleDeleteOfCart(cart.id)}>
                    <MdDelete size={20} color="#3f51b5" />{' '}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar Pedido</button>

          <Total>
            <span>TOTAL</span>
            <strong>{cartState.totalPrice}</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
};

export default Cart;
