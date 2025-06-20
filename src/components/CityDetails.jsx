import {useParams} from 'react-router'

export function CityDetails({cities}) {

  const {id }= useParams ()
  

  const city = cities.find(city => city.id === id);


  return (
    <div>
        <h2>{city.thumbnail}</h2>
        <p>{city.title}</p>
        <p> {city.summary} </p>
    </div>
);
}