'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="navbar-brand" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Ethikao" className={styles.logo} />
        </Link>
        <button className={`navbar-toggler ${styles.menuIcon}`} type="button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/boutique" className="nav-link" onClick={closeMenu}>Boutique</Link>
            </li>
            <li className="nav-item">
              <Link href="/evenement" className="nav-link" onClick={closeMenu}>Évènement</Link>
            </li>
            <li className="nav-item">
              <Link href="/apropos" className="nav-link" onClick={closeMenu}>À propos</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link href="/cart" className="nav-link" onClick={closeMenu}>Panier</Link>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && <div className={styles.menuOverlay} onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
