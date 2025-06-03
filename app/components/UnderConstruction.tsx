import React from 'react';
import { FaTools } from 'react-icons/fa';
import Link from 'next/link';

interface UnderConstructionProps {
  pageName: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ pageName }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <FaTools className="mx-auto text-gray-400 mb-4" size={48} />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {pageName}
          </h1>
          <p className="text-gray-600 mb-6">
            Esta sección está actualmente en construcción. Estamos trabajando para mejorar tu experiencia.
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-2 bg-[#95C11F] text-white rounded-md hover:bg-[#86AD1B] transition-colors font-medium"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction; 