'use client';
import { Suspense } from 'react';
import ProductsPage from '@/components/Products'; // move your component logic to ProductsPage

export default function ProductsPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPage />
    </Suspense>
  );
}