import MainTitle from '../components/MainTitle'
import '../styles/Crew.css'
import { useEffect, useState } from 'react'

export default function Crew() {

  const [crew, setCrew] = useState([])
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)
  const [tab, setTab] = useState('Douglas Hurley')

  useEffect(() => {
    consultarApi()
  },[index])

  const consultarApi = async () => {
    const url = 'https://my-json-server.typicode.com/DavidXploidz/Space-Tourism-Landing/db';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setData(resultado.crew);
    setCrew(resultado.crew[index]);
  }

  const {name, role, bio, images} = crew;

  const handleSetTab = (tab, index) => {
    setTab(tab)
    setIndex(index)
  } 

  return (
    <div className="crew">
      <div className="container">
        <MainTitle number={'02'} title={'Meet your crew'} />
        <div className='crew__content'>
            <p className='crew__role'>{role}</p>
            <h3 className='crew__name'>{name}</h3>
            <p className='crew__bio'>{bio}</p>
        </div>
        <div className='crew__dots'>
          {data?.map((person, index) => (
            <div key={index} className={`${tab === person.name ? 'crew__dot--active' : ''} crew__dot`} onClick={() => handleSetTab(person.name, index)}></div>
          ))}
            {/* <div className='crew__dot crew__dot--active' onClick={() => handleSetTab(0)}></div>
            <div className='crew__dot' onClick={() => handleSetTab(1)}></div>
            <div className='crew__dot' onClick={() => handleSetTab(2)}></div>
            <div className='crew__dot' onClick={() => handleSetTab(3)}></div> */}
        </div>
        <img className='crew__image' src={`${images?.png}`} alt={`Image profile of ${name}`} />
      </div>
    </div>
  )
}
