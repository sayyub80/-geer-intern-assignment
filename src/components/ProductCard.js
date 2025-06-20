import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
      <Link href={`/products/${product._id}`} className="block relative h-64 w-full">
        <Image
          src={`${product.imageUrl}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80`}
          alt={product.name}
          fill
          className="object-cover hover:opacity-90 transition"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/products/${product._id}`}>
            <h3 className="font-semibold text-lg hover:text-amber-600 transition">
              {product.name}
            </h3>
          </Link>
          <span className="text-amber-600 font-medium">${product.price.toFixed(2)}</span>
        </div>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
              {product.category}
            </span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
              {product.material}
            </span>
            {product.gemstone !== 'None' && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                {product.gemstone}
              </span>
            )}
          </div>
          <Link 
            href={`/products/${product._id}`}
            className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;