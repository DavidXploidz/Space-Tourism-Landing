import '../styles/Header.css'
import { Link, useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation();
  const currentPath = location.pathname;

  // Extraer el nombre de la ruta
  const routeName = currentPath.substring(1); // Eliminar la barra inicial si es necesario


  return (
    <header className='header'>
      <picture className='header__logo'>
        <img src="/images/shared/logo.svg" alt="logo principal" />
      </picture>
      <nav className='header__nav'>
        <ul className='header__links'>
          <Link className={`${routeName === 'home' ? 'header__link--active' : ''} header__link`} to="/home">00 <span className='header__link--normal'>home</span></Link>
          <Link className={`${routeName === 'destination' ? 'header__link--active' : ''} header__link`} to="/destination">01 <span className='header__link--normal'>destination</span></Link>
          <Link className={`${routeName === 'crew' ? 'header__link--active' : ''} header__link`} to="/crew">02 <span className='header__link--normal'>crew</span></Link>
          <Link className={`${routeName === 'technology' ? 'header__link--active' : ''} header__link`} to="/technology">03 <span className='header__link--normal'>technology</span></Link>
        </ul>
      </nav>
    </header>
  )
}
