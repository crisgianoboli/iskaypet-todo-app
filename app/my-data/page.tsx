import React from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Header from '../components/header/Header';
import Navigation from '../components/header/Navigation';

export default function MyData() {
  return (
    <>
      <div className="border-b border-gray-200">
        <Header />
      </div>
      <Navigation />
      <UnderConstruction pageName="Mis datos" />
    </>
  );
} 