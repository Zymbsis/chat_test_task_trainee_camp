import { Suspense } from 'react';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <main>
      <section className={css.section}>
        <div className={css.container}>
          <Suspense fallback='Loading'>{children}</Suspense>
        </div>
      </section>
    </main>
  );
};

export default Layout;
