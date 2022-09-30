// import {withRouter} from 'react-router-dom'
// import Cookies from 'js-cookie'

// const LogoutButton = props => {
//   const onCLickLogout = () => {
//     const {history} = props
//     Cookies.remove('jwt_token')
//     history.replace('login')
//   }
//   return (
//     <div>
//       <button type="button" onClick={onCLickLogout}>
//         Logout
//       </button>
//     </div>
//   )
// }

// export default withRouter(LogoutButton)

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button type="button" className="logout-button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
