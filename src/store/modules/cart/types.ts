export interface IProduct {
  id: number;
  image: string;
  price: number;
  priceFormatted: string;
  title: string;
}

export interface ICart extends IProduct {
  amount: number;
}

export interface IUpdateAmount {
  id: number;
  amount: number;
}

export interface DispacthAction {
  payload: any;
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'UPDATE_AMOUNT';
}
