// import Cookies from 'js-cookie'
// import {Route, Redirect} from 'react-router-dom'

// const ProtectedRoute = props => {
//   const jwtToken = Cookies.get('jwt_token')
//   if (jwtToken === undefined) {
//     return <Redirect to="/login" />
//   }
//   return <Route {...props} />
// }

// export default ProtectedRoute

import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
