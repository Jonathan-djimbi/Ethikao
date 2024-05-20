'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';  // Assurez-vous que ce chemin est correct
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <html lang="fr">
      <head>
        <title>Ethikao</title>
      </head>
      <body>
        <div className={styles.layout}>
          <Navbar />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
