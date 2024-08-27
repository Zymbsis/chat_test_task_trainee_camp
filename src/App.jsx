import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { getQuotes } from './redux/chats/operations';
const HomePage = lazy(() => import('./pages/HomePage'));
const MainChatPage = lazy(() => import('./pages/MainChatPage'));

const App = () => {
  const isLoggedIn = true;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuotes());
  });
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
