import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useUser from '../../hooks/data/useUser';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/unauthorized',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
