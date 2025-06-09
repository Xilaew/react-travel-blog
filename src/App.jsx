import { BlogNav } from "./components/BlogNav";
import { Hero } from "./components/Hero";

import { Footer } from "./components/Footer";
import { Suggestions } from "./components/Suggestions";
import { TravelCards } from "./components/TravelCards";
import {Overview} from "./components/Overview"

import { Data } from './Data'

export function App() {

  const mappedData = Data.map((item) => {
		return (
			<TravelCards key={item.id} item={item} />
		)
	})

  return (
    <>
      <BlogNav />

      <Hero />

      <Overview/>
    
<br/>
   {mappedData}
     

      <Suggestions/>

      <Footer />
    </>
  );
}
