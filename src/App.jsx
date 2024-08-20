import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RestrictedRoute from './pages/RestrictedRoute';
import PrivateRoute from './pages/PrivateRoute';
const HomePage = lazy(() => import('./pages/HomePage'));
const MessagesPage = lazy(() => import('./pages/MessagesPage'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route
          path='/'
          element={
            <RestrictedRoute
              component={<HomePage />}
              redirectTo='/messages'
            />
          }
        />
        <Route
          path='/messages'
          element={
            <PrivateRoute
              component={<MessagesPage />}
              redirectTo='/'
            />
          }
        />
        <Route
          path='*'
          element={
            <Navigate
              to='/'
              replace
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
