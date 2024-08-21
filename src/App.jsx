import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
const HomePage = lazy(() => import('./pages/HomePage'));
const MainChatPage = lazy(() => import('./pages/MainChatPage'));

const App = () => {
  const isLoggedIn = true;
  return (
    <Layout>
      <Routes>
        <Route
          path='/'
          element={isLoggedIn ? <Navigate to='/main_chat' /> : <HomePage />}
        />
        <Route
          path='/main_chat'
          element={isLoggedIn ? <MainChatPage /> : <Navigate to='/' />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
