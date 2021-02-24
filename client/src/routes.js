import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp'
import Home from './pages/Home';
import Random from './pages/Random';

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
export function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}

const routes = [
    { path: '/', key: 'ROOT', exact: true, component: Home },
    { path: '/sign-in', key: 'LOGIN', exact: true, component: SignIn },
    //{ path: "/sign-up", exact: true, component: SignUp },
    {
        path: '/custom-lists/:id',
        key: 'C_LIST',
        exact: true,
        component: Random,
    },
    {
        path: '/lists',
        key: 'lists',
        component: RenderRoutes,
        routes: [
            {
                path: '/lists/:id',
                key: 'L_ID',
                exact: true,
                component: () => <h1>list id</h1>,
            },
            {
                path: '/lists',
                key: 'L_ROOT',
                exact: true,
                component: () => <h1>list index</h1>,
            },
        ],
    },
];

export default routes;
