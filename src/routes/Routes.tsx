import React from 'react';
import { RouteProps, Route as ReactRouteDom, Redirect } from 'react-router-dom';
// mport { useAuth } from '../hooks/AuthContext';

interface RoutePropsRouterDom extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteDom: React.FC<RoutePropsRouterDom> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // const { user } = useAuth();
  const user = localStorage.getItem('@LinkShare:admin');

  return (
    <ReactRouteDom
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/Admin',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default RouteDom;
