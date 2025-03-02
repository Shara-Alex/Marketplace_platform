import { useEffect, useState } from 'react';
import ProductCard from '../components/common/ProductCard';
import { fetchProducts } from '../services/products';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};