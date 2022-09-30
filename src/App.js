// import {Switch, Route} from 'react-router-dom'

// import Login from './components/Login'
// import Home from './components/Home'
// import About from './components/About'
// import NotFound from './components/NotFound'
// import ProtectedRoute from './components/ProtectedRoute'

// const App = () => (
//   <>
//     <Switch>
//       <Route to="/login" component={Login} />
//       <ProtectedRoute exact to="/" component={Home} />
//       <ProtectedRoute exact to="/about" component={About} />
//       <Route component={NotFound} />
//     </Switch>
//   </>
// )

// export default App

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
