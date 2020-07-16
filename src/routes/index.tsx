import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Home';
import Cart from '../pages/Cart';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Admin from '../pages/Admin';
import NotFound from './NotFound';
import RouterDom from './Routes';
import CreateProduct from '../pages/CreateProduct';
import EditProduct from '../pages/EditProduct';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Main} path="/" exact />
      <Route component={Cart} path="/cart" />
      <Route component={SingIn} path="/SingIn" />
      <Route component={SingUp} path="/SingUp" />
      <RouterDom component={Admin} path="/Admin" isPrivate />
      <RouterDom component={CreateProduct} path="/CreateProduct" isPrivate />
      <RouterDom component={EditProduct} path="/EditProduct" isPrivate />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
