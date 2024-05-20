"use client"; 

import React from 'react';
import '../styles/globals.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>À PROPOS DE NOUS</h5>
            <p>Nous sommes une entreprise engagée dans la vente de chocolats équitables et responsables.</p>
          </div>
          <div className="col">
            <h5>LIENS UTILES</h5>
            <ul>
               <li><a href="/boutique">Boutique</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>CONTACT</h5>
            <p>Email: contact@ethikao.com</p>
            <p>Téléphone: +33 1 23 45 67 89</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Ethikao</p>
      </div>
    </footer>
  );
};

export default Footer;
