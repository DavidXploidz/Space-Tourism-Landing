import MainTitle from '../components/MainTitle'
import '../styles/Tech.css'

export default function Technology() {
  return (
    <div className="tech">
        <MainTitle number={'03'} title={'Space launch 101'} />
        <div className='tech__grid'>
            <div className='tech__steps'>
                <div className='tech__step tech__step--active'>1</div>
                <div className='tech__step'>2</div>
                <div className='tech__step'>3</div>
            </div>
            <div className='tech__content'>
                <p className='tech__terminology'>the terminology...</p>
                <h3 className='tech__name'>launch vehicle</h3>
                <p className='tech__description'>
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!
                </p>
            </div>
            <img className='tech__image' src="/images/technology/image-launch-vehicle-portrait.jpg" alt="image space" />
        </div>
    </div>
  )
}
