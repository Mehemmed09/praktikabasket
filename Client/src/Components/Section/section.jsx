import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../Cards/Card'; 
import '../Section/section.scss'
function Products() { 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Ürünler alınamadı:', error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Boş bağımlılık dizisi, sadece ilk render'da çalışması için

  return (
    <div > 
      {loading ? (
        <p>Ürünler yükleniyor...</p>
      ) : (
        <div className='cards'>
          {products.map((product) => (
            <Cards key={product.id} {...product} product = {product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
