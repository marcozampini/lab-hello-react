import ironhackLogo from '../images/ironhack-logo-xs.png'
import menuIcon from '../images/menu-top-xs.png'

const NavBar = () => (
  <nav>
    <a href="./">
      <img src={ironhackLogo} alt="Ironhack logo" />
    </a>
    <a href="./">
      <img src={menuIcon} alt="Menu" />
    </a>
  </nav>
)
export default NavBar
