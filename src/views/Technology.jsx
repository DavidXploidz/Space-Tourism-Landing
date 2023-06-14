import MainTitle from '../components/MainTitle'
import '../styles/Tech.css'
import { useEffect, useState } from 'react'

export default function Technology() {

    const [tech, setTech] = useState([])
    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
    const [tab, setTab] = useState('Launch vehicle')

    useEffect(() => {
        consultarApi()
      },[index])
    

    const consultarApi = async () => {
        const url = 'https://my-json-server.typicode.com/DavidXploidz/Space-Tourism-Landing/db';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setData(resultado.technology);
        console.log(resultado)
        setTech(resultado.technology[index]);
      }
    
    const handleClickTech = async (name, index) => {
        setTab(name)
        setIndex(index)
    }

    const {name, description, images} = tech;

  return (
    <div className="tech">
        <div className="container container--right">
            <MainTitle number={'03'} title={'Space launch 101'} />
            <div className='tech__grid'>
                <div className='tech__steps'>
                    {data?.map((tech, index) => (
                        <div key={index} className={`${tab === tech.name ? 'tech__step--active' : ''} tech__step`} onClick={() => handleClickTech(tech.name, index)}>
                            {index+1}
                        </div>
                    ))}
                </div>
                <div className='tech__content'>
                    <p className='tech__terminology'>the terminology...</p>
                    <h3 className='tech__name'>{name}</h3>
                    <p className='tech__description'>{description}</p>
                </div>
                <img className='tech__image' src={images?.portrait} alt={`Image tech of ${name}`} />
            </div>
        </div>
    </div>
  )
}
