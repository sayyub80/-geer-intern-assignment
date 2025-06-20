import Link from 'next/link';
import Image from 'next/image';

const heroImage = {
  src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
  alt: 'Luxury jewelry collection'
};

const jewelryCollections = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1603974374373-b6d0c76fb3e6',
    name: 'Diamond Necklace',
    price: 2499.99,
    category: 'Necklaces'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
    name: 'Gold Bracelet',
    price: 899.99,
    category: 'Bracelets'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a',
    name: 'Pearl Earrings',
    price: 599.99,
    category: 'Earrings'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
    name: 'Sapphire Ring',
    price: 1299.99,
    category: 'Rings'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={`${heroImage.src}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80`}
            alt={heroImage.alt}
            fill
            className="object-cover opacity-70"
            priority
            quality={80}
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exquisite Jewelry Collections
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Handcrafted with precision and passion
            </p>
            <Link
              href="/store"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {jewelryCollections.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={`${item.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80`}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-amber-400 text-sm">{item.category}</p>
                    <h3 className="text-white text-xl font-semibold">{item.name}</h3>
                    <p className="text-amber-300 font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Craftsmanship Since 1985</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nakash Jewels has been creating timeless pieces with exceptional craftsmanship for over three decades.
          </p>
          <Link
            href="/about"
            className="inline-block border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Our Story
          </Link>
        </div>
      </section>
    </div>
  );
}