import '../styles/Header.css'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <header className='header'>
      <picture className='header__logo'>
        <img src="/images/shared/logo.svg" alt="logo principal" />
      </picture>
      <nav className='header__nav'>
        <ul className='header__links'>
          <Link className='header__link' to="/home">00 <span className='header__link--normal'>home</span></Link>
          <Link className='header__link' to="/destination">01 <span className='header__link--normal'>destination</span></Link>
          <Link className='header__link' to="/crew">02 <span className='header__link--normal'>crew</span></Link>
          <Link className='header__link' to="/crew">03 <span className='header__link--normal'>technology</span></Link>
        </ul>
      </nav>
    </header>
  )
}
