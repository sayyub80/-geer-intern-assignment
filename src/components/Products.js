'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current filters from URL
  const category = searchParams.get('category');
  const material = searchParams.get('material');
  const search = searchParams.get('search');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const sort = searchParams.get('sort');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Build query params
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (material) params.append('material', material);
        if (search) params.append('search', search);
        if (minPrice) params.append('minPrice', minPrice);
        if (maxPrice) params.append('maxPrice', maxPrice);
        if (sort) params.append('sort', sort);
        
        const res = await fetch(`/api/products?${params.toString()}`);
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchFilters = async () => {
      try {
        const res = await fetch('/api/products/filters');
        if (!res.ok) throw new Error('Failed to fetch filters');
        const data = await res.json();
        setCategories(data.categories);
        setMaterials(data.materials);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    fetchProducts();
    fetchFilters();
  }, [category, material, search, minPrice, maxPrice, sort]);

  const handleFilterChange = (filter, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(filter, value);
    } else {
      params.delete(filter);
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    handleFilterChange('search', searchValue);
  };

  const clearFilters = () => {
    router.push('/products');
  };

  return (
    <div className=" px-25  mx-auto mt-0  ">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-72 bg-white rounded-lg shadow-md p-6 h-fit sticky top-4">
          <div className="mb-6">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Search products..."
                  defaultValue={search || ''}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button 
                  type="submit"
                  className="absolute left-3 top-2.5 text-gray-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleFilterChange('category', '')}
                    className={`text-sm w-full text-left px-3 py-1 rounded ${!category ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => handleFilterChange('category', cat)}
                      className={`text-sm w-full text-left px-3 py-1 rounded ${category === cat ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Materials</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleFilterChange('material', '')}
                    className={`text-sm w-full text-left px-3 py-1 rounded ${!material ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    All Materials
                  </button>
                </li>
                {materials.map((mat) => (
                  <li key={mat}>
                    <button 
                      onClick={() => handleFilterChange('material', mat)}
                      className={`text-sm w-full text-left px-3 py-1 rounded ${material === mat ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      {mat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Price Range</h3>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min $"
                  value={minPrice || ''}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  className="w-full p-2 border rounded text-sm"
                />
                <input
                  type="number"
                  placeholder="Max $"
                  value={maxPrice || ''}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Sort By</h3>
              <select
                value={sort || '-createdAt'}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="w-full p-2 border rounded text-sm"
              >
                <option value="-createdAt">Newest First</option>
                <option value="createdAt">Oldest First</option>
                <option value="price">Price: Low to High</option>
                <option value="-price">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
                <option value="-name">Name: Z-A</option>
              </select>
            </div>

            {(category || material || search || minPrice || maxPrice || sort !== '-createdAt') && (
              <button
                onClick={clearFilters}
                className="w-full text-sm text-amber-600 hover:text-amber-800 font-medium mt-4"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 py-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {category ? `${category} Collection` : 'All Jewelry'}
              {search && `: Results for "${search}"`}
            </h2>
            <p className="text-gray-600">{products.length} products found</p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden h-80 animate-pulse">
                  <div className="bg-gray-200 h-48 w-full"></div>
                  <div className="p-4 space-y-2">
                    <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                    <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={clearFilters}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}