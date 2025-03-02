import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/Auth/LoginPage';
import SellerDashboard from './pages/Dashboard/SellerDashboard';
import PrivateRoute from './components/common/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/seller-dashboard"
          element={
            <PrivateRoute role="seller">
              <SellerDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};