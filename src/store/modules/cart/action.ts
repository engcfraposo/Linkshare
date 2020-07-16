import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

import { DispacthAction, IProduct, IUpdateAmount } from './types';

export class CartDispatcher {
  // private readonly dispatch: Dispatch<DispacthAction>;
  private readonly dispatch: Dispatch<DispacthAction>;

  constructor() {
    const dispatch = useDispatch();

    this.dispatch = dispatch;
  }

  addToCart = (product: IProduct) =>
    this.dispatch({ type: 'ADD_TO_CART', payload: product });

  removeFromCart = (id: number) =>
    this.dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });

  updateAmount = ({ id, amount }: IUpdateAmount) =>
    this.dispatch({ type: 'UPDATE_AMOUNT', payload: { id, amount } });
}
