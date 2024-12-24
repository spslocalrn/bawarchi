import React from 'react';
import { ChefHat } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bawarchi</h1>
              <p className="text-sm text-gray-600">Your Digital Culinary Companion</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;