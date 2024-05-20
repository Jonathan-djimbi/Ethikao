import React from 'react';
import styles from '../styles/filter.module.css';

const Filter = ({ categories, countries, selectedCategory, selectedCountry, selectedPriceRange, onSelectCategory, onSelectCountry, onSelectPriceRange }) => {
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Filter Component</h3>
      <div className={styles.filterGroup}>
        <label>Catégorie</label>
        <select className={styles.filterSelect} value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
          <option value="all">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label>Pays de Fabrication</label>
        <select className={styles.filterSelect} value={selectedCountry} onChange={(e) => onSelectCountry(e.target.value)}>
          <option value="all">All</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label>Prix</label>
        <input 
          type="range" 
          className={styles.filterRange} 
          min="0" 
          max="100" 
          value={selectedPriceRange} 
          onChange={(e) => onSelectPriceRange(e.target.value)} 
        />
        <span>{selectedPriceRange} €</span>
      </div>
    </div>
  );
};

export default Filter;
