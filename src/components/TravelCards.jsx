const destinations = [
  {
    image: "https://live.staticflickr.com/65535/48447525277_ff7c3134dc_z.jpg",
    title: "Germany - Hefen City, Hamburg.",
    description:"Insights and takeaways from this trips.",
      
  },
  {
    image: "https://live.staticflickr.com/65535/49665369267_f64939290d_b.jpg",
    title: "Kenya - Nairobi National Park",
    description: "Insights and takeaways from this trips.",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2020/08/19/15/31/huangpu-river-5501210_1280.jpg",
    title: "China - Shanghai Tower",
    description: "Insights and takeaways from this trips.",
  },

  {
    image:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJ2YW5jb3V2ZXJfY2FuYWRhXzE2ODQ0NjctaW1hZ2Uta3liY2ZldzQuanBn.jpg",
    title: "Canada - Vancouver wild whale watching",
    description: "Insights and takeaways from this trips.",
  },
  // more destinations can be added
];

export function TravelCards() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Visited Places</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
          {destinations.map((city, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-poiter">
              <img src={city.image} alt={city.title} className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{city.title}</h3>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

