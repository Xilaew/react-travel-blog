
import { Link } from 'react-router-dom';

const cities = [{
    id: 1,
    title: "Hafen City",
    location:"Hamburg-Germany",
    author: "Charles Owino",
    authorPhoto:"https://images.freeimages.com/vhq/images/previews/d86/business-man-avatar-vector-119726.png",
    startDate: "2015.July.15",
    endDate:"2015.Aug.15",
    thumbnail:"https://live.staticflickr.com/65535/48447525277_ff7c3134dc_z.jpg",
    summary: "New experiments and innovations are constantly playing their part in HafenCity’s increasingly ambitious development, which in many areas has also emancipated itself from the 2000 Masterplan but without losing sight of its basic idea. Because the development of HafenCity simultaneously creates an institutional framework for integrating new model projects, it provides a highly regarded platform for innovation. The city of Hamburg can thus also substantially strengthen its pioneering role in the area of forward-looking urbanity and make a significant contribution to climate-friendly and social progress.",
    googleMapLink:"",
    long:"", 
    lat :""
   
  },
  {
    id: 2,
    title: "Nairobi National Park",
    location:"Nairobi-Kenya",
     author: "Janet Washington",
     authorPhoto:"https://images.freeimages.com/vhq/images/previews/d86/business-man-avatar-vector-119726.png",
    startDate: "2024-06-18",
    endDate:"2014-07-18",
    thumbnail:"https://live.staticflickr.com/65535/49665369267_f64939290d_b.jpg",
    summary: "Details on the second encounter and its impacts.",
    googleMapLink:"",
    long:"", 
    lat :""
  
  },
  {
    id: 3,
    title: "Shanghai Tower",
     location:"Shanghai-China",
    author: "Irene Francis",
    authorPhoto:"https://images.freeimages.com/vhq/images/previews/d86/business-man-avatar-vector-119726.png",
   startDate: "2020-06-20",
    endDate:"2020-06-20",
    thumbnail:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg1OTcyNDQtaW1hZ2Uta3d2eGtubHEuanBn.jpg",
    summry: "Insights and takeaways from the third discussion.",
    googleMapLink:"",
    long:"", 
    lat :""
   
  },

  {
    id: 4,
    title: "Vancouver wild whale watching",
     location:"Vancouver-Canada",
    author: "James Mwezi",
    authorPhoto:"https://images.freeimages.com/vhq/images/previews/d86/business-man-avatar-vector-119726.png",
    startDate: "2024-06-24",
    endDate:"2024-06-25",
    thumbnail:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJ2YW5jb3V2ZXJfY2FuYWRhXzE2ODQ0NjctaW1hZ2Uta3liY2ZldzQuanBn.jpg",
    summary: "Insights and takeaways from the third discussion.",
    googleMapLink:"",
    long:"", 
    lat :""
   
  },];

export function CityList() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-30">
      <h1 className="text-3xl font-bold mb-6">Visited Cities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map(city => (
          <div key={city.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <img src={city.thumbnail} alt={city.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{city.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{city.startDate}</p>
              <Link
                to={`/city/${city.id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

