import { lazy } from 'react';
import Layout from './components/Layout/Layout';
const MainChatPage = lazy(() => import('./pages/MainChatPage'));

const App = () => {

  return (
    <Layout>
      <MainChatPage />
    </Layout>
  );
};

export default App;
