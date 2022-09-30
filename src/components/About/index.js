// import Header from '../Header/index'
// import LogoutButton from '../LogoutButton'
// import './index.css'

// const About = () => (
//   <>
//     <Header />
//     <div className="about-container">
//       <h1>About Route</h1>
//       <LogoutButton />
//     </div>
//   </>
// )

// export default About

import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about">
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default About
