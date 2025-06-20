import { Link } from 'react-router';

export function Cities({cities}) {
  return (
    <div>
      <h2>Visited Cities</h2>
      <ul>
    {cities.map((city) => (
        <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.title}</Link>
        </li>
    ))}
</ul>
    </div>
  );
}