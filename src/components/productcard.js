import React from 'react';
import { useCart } from '../context/cartcontext'; // Assurez-vous que le chemin est correct
import styles from '../styles/productcard.module.css';

const ProductCard = ({ product }) => {
  const cartContext = useCart();
  console.log('CartContext:', cartContext);  // Ajoutez ceci pour vérifier ce que retourne useCart
  const { dispatch } = cartContext;

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', item: product });
  };

  return (
    <div className={styles.card}>
      <img src={product.imageUrl} alt={product.Name} className={styles.image} />
      <h3>{product.Name}</h3>
      <p>{product.Description}</p>
      <p>{product.Price} €</p>
      <button onClick={addToCart}>Ajouter au panier</button>
    </div>
  );
};

export default ProductCard;
