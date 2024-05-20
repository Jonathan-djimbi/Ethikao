'use client';
import Layout from '../app/layout';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
//import { CartProvider } from '../context/cartcontext'; // Assurez-vous que le chemin est correct
const DynamicCarrousel = dynamic(() => import('../components/carrousel'), { ssr: false });

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <CartProvider>
      <Layout>
        <DynamicCarrousel />
        <section className="featured-products">
          <h2>Nos produits phares</h2>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} width={300} height={300} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">{product.price} €</p>
                <button className="cta">Ajouter au panier</button>
              </div>
            ))}
          </div>
        </section>
        <section className="about-section">
          <div className="about-container">
            <div className="about-image">
              <img src="/images/section-quisommesnous.png" alt="Ethikao" />
            </div>
            <div className="about-content">
              <h2>Qui sommes-nous ?</h2>
              <h3>Comment consommer du chocolat de manière responsable et éthique ?</h3>
              <p>
                La genèse d’Ethikao tire son origine de cette question. Ethikao s’est lancé dans cette quête : se procurer en France,
                des chocolats d'origine africaine, fabriqués en Afrique.
                Nous souhaitons transformer le consommateur de chocolat en dégustateur de chocolat conscient.
              </p>
              <button className="btn btn-primary">En savoir plus</button>
            </div>
          </div>
        </section>
        <section className="about-us">
          <h2>À propos de nous</h2>
          <div className="about-grid">
            <div className="about-item">
              <img src="/images/larissa.jpg" alt="Person 1" className="about-img" />
              <p><strong>Andréa</strong>, la responsable administrative et financière, qui mène de front vie de mère et vie de consultante en transformation financière.</p>
            </div>
            <div className="about-item">
              <img src="/images/larissa.jpg" alt="Person 2" className="about-img" />
              <p><strong>Larissa</strong>, globe-trotteuse, est ingénieure de formation et passionnée de chocolat. Elle a ensuite repris ses études en contrôle de gestion. Larissa est le chef de projet d'ETHIKAO.</p>
            </div>
          </div>
        </section>
      </Layout>
    </CartProvider>
  );
}

const featuredProducts = [
  { id: 1, name: 'Chocolat Noir Intense', price: 9.99, image: '/images/chocolat-noir.jpg', description: 'Un chocolat noir puissant et aromatique, avec des notes de fruits rouges.' },
  { id: 2, name: 'Coffret Découverte', price: 24.99, image: '/images/coffret-decouverte.jpg', description: 'Une sélection de nos meilleurs chocolats, idéale pour offrir ou se faire plaisir.' },
  { id: 3, name: 'Tablette Lait Amande', price: 7.99, image: '/images/tablette-lait-amande.jpg', description: 'Une tablette de chocolat au lait onctueux, parsemée d\'amandes croquantes.' },
];
