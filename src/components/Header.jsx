import '../styles/Header.css'
import { Link, useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation();
  const currentPath = location.pathname;

  // Extraer el nombre de la ruta
  const routeName = currentPath.substring(1); // Eliminar la barra inicial si es necesario


  return (
    <header className='header'>
      <div className='header__icons'>
        <img className='header__logo' src="/images/shared/logo.svg" alt="logo principal" />
        <img className='header__ham' src="/images/shared/icon-hamburger.svg" alt="menu ham" />
      </div>
      <nav className='header__nav'>
        <ul className='header__links'>
          <Link className={`${routeName === 'home' ? 'header__link--active' : ''} header__link`} to="/home"><span className='header__link--normal'>00 </span>home</Link>
          <Link className={`${routeName === 'destination' ? 'header__link--active' : ''} header__link`} to="/destination"><span className='header__link--normal'>01 </span>destination</Link>
          <Link className={`${routeName === 'crew' ? 'header__link--active' : ''} header__link`} to="/crew"><span className='header__link--normal'>02 </span>crew</Link>
          <Link className={`${routeName === 'technology' ? 'header__link--active' : ''} header__link`} to="/technology"><span className='header__link--normal'>03 </span>technology</Link>
        </ul>
      </nav>
    </header>
  )
}
