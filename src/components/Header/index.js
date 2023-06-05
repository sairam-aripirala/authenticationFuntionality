import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <li className="links">
      <Link to="/">Home</Link>
    </li>
    <li className="links">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
