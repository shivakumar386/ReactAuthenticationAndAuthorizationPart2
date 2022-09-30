// import {Link} from 'react-router-dom'

// import './index.css'

// const Header = () => (
//   <nav className="header-container">
//     <ul className="ul-elements">
//       <li className="li-elements">
//         <Link to="/">Home</Link>
//       </li>
//       <li className="li-elements">
//         <Link to="/about">About</Link>
//       </li>
//     </ul>
//   </nav>
// )

// export default Header

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
