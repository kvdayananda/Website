import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import MenuPage from './pages/MenuPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import AdminDashboard from './pages/AdminDashboard';
import KitchenDisplay from './pages/KitchenDisplay';
import { HotelProvider } from './context/HotelContext';
import AIChefChat from './components/AIChefChat';

const App: React.FC = () => {
  return (
    <HotelProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/menu" replace />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/order-summary/:orderId" element={<OrderSummaryPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/kitchen" element={<KitchenDisplay />} />
            </Routes>
          </Layout>
          {/* Global AI Assistant available on all pages */}
          <AIChefChat />
        </div>
      </HashRouter>
    </HotelProvider>
  );
};

export default App;