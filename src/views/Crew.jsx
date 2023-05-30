import MainTitle from '../components/MainTitle'
import '../styles/Crew.css'

export default function Crew() {
  return (
    <div className="crew">
        <MainTitle number={'02'} title={'Meet your crew'} />
        <div className='crew__content'>
            <p className='crew__role'>Commander</p>
            <h3 className='crew__name'>Douglas hurley</h3>
            <p className='crew__bio'>
                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
            </p>
        </div>
        <div className='crew__dots'>
            <div className='crew__dot'></div>
            <div className='crew__dot'></div>
            <div className='crew__dot'></div>
            <div className='crew__dot'></div>
        </div>
        <img className='crew__image' src="/images/crew/image-douglas-hurley.webp" alt="Image person" />
    </div>
  )
}
