import React, { lazy, Suspense } from 'react'
import { Skeleton } from 'antd'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { helper } from '../helpers/common'
// su dung lazy
const SearchPage = lazy(() => import('../pages/search/index'));
const PopularPage = lazy(() => import('../pages/poplaur/index'));
const UpcomingPage = lazy(() => import('../pages/upcoming/index'));
const LoginPage = lazy(() => import('../pages/login/index'));
const DetailMovie = lazy(() => import('../pages/detail/index'));

const PrivateRoute = ({ children, ...rest }) => {
    const auth = helper.isAuthenticated();
    return (
        <Route
            {...rest}
            render={({ location }) => auth
                ? (children)
                : <Redirect to={{
                    pathname: "/",
                    state: { from: location }
                }} />
            }
        />
    );
}
const IsLoginRoute = ({ children, ...rest }) => {
    const auth = helper.isAuthenticated();
    return (
        <Route
            {...rest}
            render={({ location }) => !auth
                ? (children)
                : <Redirect to={{
                    pathname: "/search-movie",
                    state: { from: location }
                }} />
            }
        />
    );
}
const AppRouteMovie = () => {
    return (
        <Router>
            <Suspense fallback={<Skeleton active />}>
                <Switch>
                    <IsLoginRoute path="/" exact>
                        <LoginPage></LoginPage>
                    </IsLoginRoute>
                    <PrivateRoute path="/popular-movie" exact>
                        <PopularPage></PopularPage>
                    </PrivateRoute>
                    <PrivateRoute path="/upcoming-movie" exact>
                        <UpcomingPage></UpcomingPage>
                    </PrivateRoute>
                    <PrivateRoute path="/search-movie" exact>
                        <SearchPage></SearchPage>
                    </PrivateRoute>
                    <PrivateRoute path="/movie-detail/:slug~:id" exact>
                        <DetailMovie></DetailMovie>
                    </PrivateRoute>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default React.memo(AppRouteMovie);