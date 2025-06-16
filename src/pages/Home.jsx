import { TravelCards } from "../components/TravelCards";


export function Home () {

  return (
    <>
    <div className='relative h-screen bg-cover bg-center' 
    style={{backgroundImage:"url(https://deih43ym53wif.cloudfront.net/climber-reaches-summit-everest-mountain-peak-nepal-shutterstock_773059939.jpg_6ddfeaf53f.jpg)"}}>

        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black"> Explore the World with us</h1>
            <p className="text-lg md:text-2l text-black mb-8">Discover or share ideas about amazing places to visit</p>

            <button className="border text-black px-6 py-2 rounded-full text-lg md:text-xl hover:bg-orange-500 transform transition duration-300 hover:scale-105">
              Get Started
              </button>

              
        </div>
    </div>

    <TravelCards/>
    
  
    
    </>
  );
}


