import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import RestaurantDetail from './components/RestaurantDetail';
import Tracking from './components/Tracking';
import Reorder from './components/Reorder';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import CategoryResults from './components/CategoryResults';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden relative border-x border-gray-100 dark:border-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<RestaurantDetail />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/reorder" element={<Reorder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/categories/:id" element={<CategoryResults />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;