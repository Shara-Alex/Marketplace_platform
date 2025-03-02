const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img
        src={product.image || '/placeholder-image.jpg'}
        alt={product.name}
        className="h-48 w-full object-cover mb-4"
      />
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};