import { useState } from 'react';
import SellerProductList from '../../components/seller/SellerProductList';
import ProductForm from '../../components/seller/ProductForm';

const SellerDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        {showForm ? 'Cancel' : 'Add Product'}
      </button>
      {showForm && <ProductForm />}
      <SellerProductList />
    </div>
  );
};