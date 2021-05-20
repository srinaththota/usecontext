import AuthContext from './store/auth-context'
import './App.css';
import { useState } from 'react';
import Users from './components/Users'
function App() {
  const [bool,setBool]=useState(false)
  const changeHandler=()=>{
    setBool(prevState=>{
      return !prevState
    })
  }
  return (
   <AuthContext.Provider value={{
     isLoggedIn:bool,
     change:changeHandler
   }}>
     <button onClick={changeHandler}>Click</button>
     <Users/>
   </AuthContext.Provider>
  );
}

export default App;
