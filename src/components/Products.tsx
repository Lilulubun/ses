const Products = () => {
  const products = [
    {
      name: "Indoor Lighting",
      image: "/lovable-uploads/7f689145-d62f-4e2a-9ae6-4947804014a8.png",
      description: "Smart solutions for homes and offices",
    },
    {
      name: "Outdoor Lighting",
      image: "/lovable-uploads/7f689145-d62f-4e2a-9ae6-4947804014a8.png",
      description: "Efficient lighting for outdoor spaces",
    },
    {
      name: "Industrial Lighting",
      image: "/lovable-uploads/7f689145-d62f-4e2a-9ae6-4947804014a8.png",
      description: "Heavy-duty solutions for industrial use",
    },
  ];

  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;