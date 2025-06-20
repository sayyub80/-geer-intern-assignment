import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Jewelry craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-amber-700">Our Story</h1>
            <p className="text-lg mb-4">
              Founded in 1985 by master jeweler David Nakash, Nakash Jewels began as a small boutique in New York's Diamond District.
            </p>
            <p className="text-lg mb-4">
              What started as a passion for creating beautiful pieces has grown into a renowned jewelry house known for exceptional craftsmanship and timeless designs.
            </p>
            <p className="text-lg mb-6">
              Each piece in our collection is handcrafted by our team of skilled artisans using only the finest materials, from ethically sourced diamonds to the purest gold.
            </p>
            <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Our Philosophy</h3>
              <p className="text-amber-700">
                "We believe jewelry should tell a story - your story. That's why we create pieces that become heirlooms, passed down through generations."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Master Jewelers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Nakash",
                role: "Founder & Master Goldsmith",
                image: "https://plus.unsplash.com/premium_photo-1661766715191-2fadaa846cde"
              },
              {
                name: "Sarah Chen",
                role: "Diamond Specialist",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              },
              {
                name: "Michael Rodriguez",
                role: "Design Director",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
              }
            ].map((person, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={`${person.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80`}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{person.name}</h3>
                  <p className="text-amber-600">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}