import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import messenger from 'img/messenger.webp';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <main>
      <section className={css.section}>
        <div className={css.container}>
          <Suspense
            fallback={
              <img
                className={css.messenger}
                src={messenger}
                alt='Messenger'
              />
            }>
            <div className={css.wrapper}>{children}</div>
          </Suspense>
        </div>
      </section>
      <>
        <ToastContainer />
      </>
    </main>
  );
};

export default Layout;
