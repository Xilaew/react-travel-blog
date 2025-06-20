import { Link } from "react-router";

const cities = [
  {
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
   
  },
  // more destinations can be added
];

export function TravelCards() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Visited Places</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
         
          {cities.map((id, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-poiter">
              <img src={id. thumbnail} alt={id.title} className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{id.title}</h3>
                 <h4 className="font-bold mb-2">{id.location}</h4>
                  <h6 className=" font-italic mb-2">From {id.startDate} to {id.endDate}</h6>
             <Link to="/">
            <button className="border text-white bg-blue-800   px-6 py-2  rounded-full text-lg md:text-xl hover:bg-orange-500 transform transition duration-300 hover:scale-105">
              Read more
              </button> </Link>
              </div>
            </div>
            
          ))}

        </div>
        
      </div>
    </div>
  );
}

