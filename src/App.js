import React  from 'react' 
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import ResetPassword from './Pages/ResetPassword'


function App () {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route exact="exact" path="/" component={SignUp}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/reset" component={ResetPassword}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
