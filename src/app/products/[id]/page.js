import dbConnect from '@/lib/db';
import Product from '@/models/Product';
import Image from 'next/image';
import Link from 'next/link';

async function getProduct(id) {
  await dbConnect();
  const product = await Product.findById(id);
  return product;
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4  py-12 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/products" className="text-amber-600 hover:underline mt-4 inline-block">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className=" mx-auto px-4 py-12 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="relative h-96 w-full rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={`${product.imageUrl}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <div className="sticky top-4">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl text-amber-600 font-semibold mb-4">${product.price.toFixed(2)}</p>
              
              <div className="flex gap-4 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {product.material}
                </span>
                {product.gemstone !== 'None' && (
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {product.gemstone}
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="mb-8">
                <h3 className="font-semibold mb-2">Details</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Material: {product.material}</li>
                  {product.gemstone !== 'None' && (
                    <li>Gemstone: {product.gemstone}</li>
                  )}
                  <li>Category: {product.category}</li>
                </ul>
              </div>

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 mb-4">
                Add to Cart
              </button>

              <Link 
                href="/products" 
                className="block text-center text-amber-600 hover:underline"
              >
                Back to products
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* You would fetch related products here */}
          </div>
        </div>
      </div>
    </div>
  );
}