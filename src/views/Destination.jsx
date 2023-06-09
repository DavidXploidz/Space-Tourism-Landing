import '../styles/Destination.css'
import { useState, useEffect } from 'react'

export default function Destination() {

  const [data, setData] = useState([]);
  const [planet, setPlanet] = useState('')
  const [tab, setTab] = useState('Moon');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    consultarApi()
  }, [index]);
  

  const consultarApi = async () => {
    // const url = 'http://localhost:5173/db.json';
    const url = 'https://my-json-server.typicode.com/DavidXploidz/Space-Tourism-Landing/db';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setData(resultado.destinations);
    setPlanet(resultado.destinations[index]);
  }

  const {name, description, distance, travel, images } = planet;


  const handleChangeTab = (tab, index) => {
    setTab(tab)
    setIndex(index)
  }

  return (
    <div className='destination'>
      <h2 className='destination__title'><span className='destination__title destination__title--span'>01</span>Pick your destination</h2>
      <div className='destination__grid'>
        <div className='destination__image'>
            {/* <img src="images/destination/image-moon.png" alt="image moon" /> */}
            <img src={`${images?.png}`} alt={`${name}`} />
        </div>
        <div className='destination__content'>
          <ul className='destination__ul'>
            {data.map((planet, index) => (
              <li key={planet.name} className={`${tab === planet.name ? 'destination__li--active' : ''} destination__li`} onClick={() => handleChangeTab(planet.name, index)}>{planet.name}</li>
            ))}
          </ul>
          <div>
            <h2 className='destination__name'>{name}</h2>
            <p className='destination__description'>{description}</p>
          </div>
          <div className='destination__extras'>
            <div>
              <p className='destination__text'>avg. distance</p>
              <p className='destination__numbers'>{distance}</p>
            </div>
            <div>
              <p className='destination__text'>est. travel time</p>
              <p className='destination__numbers'>{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
