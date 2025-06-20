
import { useParams, Link } from 'react-router-dom';

const cities = [{
    id: 1,
    title: "Hafen City",
    location:"Hamburg-Germany",
    author: "Charles Owino",
    authorPhoto:"https://images.freeimages.com/vhq/images/previews/d86/business-man-avatar-vector-119726.png",
    startDate: "2015.July.15",
    endDate:"2015.Aug.15",
    thumbnail:"https://live.staticflickr.com/65535/48447525277_ff7c3134dc_z.jpg",
    summary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet..",
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
    summary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet..",
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
    summary: "Insights and takeaways from the third discussion.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos natus molestiae at. Quisquam repellendus, inventore dolorem atque velit magni cum reprehenderit dicta, deleniti quidem voluptas nesciunt officia aliquam animi iusto." ,
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
    summary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    googleMapLink:"",
    long:"", 
    lat :""
   
  },];

export function CityDetail() {
  const { id } = useParams();
  const city = cities.find(c => c.id === parseInt(id));

  if (!city) return <div className="p-6 text-red-500"> ...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20" >
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block"> Back to Home Page</Link>
      <img src={city.thumbnail} alt={city.title} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{city.title}</h1>
      <p className="text-gray-600 mb-2">{city.location}</p>
      <p className="text-sm text-gray-500 mb-4">From {city.startDate} to {city.endDate}</p>
      <div className="flex items-center mb-6">
        <img src={city.authorPhoto} alt={city.author} className="w-10 h-10 rounded-full mr-3" />
        <span className="text-sm text-gray-700">{city.author}</span>
      </div>
      <p className="text-gray-800 leading-relaxed">{city.summary}</p>
    </div>
  );
}

