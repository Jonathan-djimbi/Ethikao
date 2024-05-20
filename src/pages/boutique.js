import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/productcard';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Filter from '../components/filter'; 
import styles from '../styles/boutique.module.css';

const Boutique = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:1338/api/products?populate=*');
        const data = response.data.data;
        console.log('Produits récupérés:', data);
        setProducts(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:1338/api/categories');
        const data = response.data.data;
        console.log('Catégories récupérées:', data);
        setCategories(data.map(category => category.attributes.name));
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:1338/api/countries');
        const data = response.data.data;
        console.log('Pays récupérés:', data);
        setCountries(data.map(country => country.attributes.name));
      } catch (error) {
        console.error('Erreur lors de la récupération des pays:', error);
      }
    };

    fetchProducts();
    fetchCategories();
    fetchCountries();
  }, []);

  const filterProducts = () => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.attributes.category === selectedCategory);
    }

    if (selectedCountry !== 'all') {
      filtered = filtered.filter(product => product.attributes.CountryOfManufacture === selectedCountry);
    }

    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        const price = product.attributes.Price;
        return price >= min && (max ? price <= max : true);
      });
    }

    return filtered;
  };

  const filteredProducts = filterProducts();

  return (
    <div className={styles.boutique}>
      <Navbar />
      <Container className="mt-4">
        <Row>
          <Col md={3}>
            <Filter 
              categories={categories}
              countries={countries}
              selectedCategory={selectedCategory}
              selectedCountry={selectedCountry}
              selectedPriceRange={selectedPriceRange}
              onSelectCategory={setSelectedCategory}
              onSelectCountry={setSelectedCountry}
              onSelectPriceRange={setSelectedPriceRange}
            />
          </Col>
          <Col md={9}>
            <Row>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Col md={4} key={product.id}>
                    <ProductCard product={product.attributes} />
                  </Col>
                ))
              ) : (
                <p>Aucun produit trouvé.</p>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Boutique;
