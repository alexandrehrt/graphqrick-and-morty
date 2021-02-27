import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';

import { LOAD_LOCATIONS } from '../GraphQL/Queries';

export default function Locations(){
  const { loading, error, data } = useQuery(LOAD_LOCATIONS);

  // if (loading) return <Cliploader />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      <Navbar />
      <ul>
        { data.locations.results.map(location => (
          <li key={location.id}>
            <p>Nome: {location.name}</p>
            <p>Tipo: {location.type}</p>
            <p>Dimensão: {location.dimension}</p>
            { location.residents.map(resident => (
              <p key={resident.id}>Nome dos residentes: {resident.name}</p>
            ))}
          </li>
        )) }
      </ul>
    </div>
  )
}