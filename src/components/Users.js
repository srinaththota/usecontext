
import React , { useContext } from 'react'
import AuthContext from '../store/auth-context'
const Users = () => {
   const ctx= useContext(AuthContext);
    return(
        <div>
        {ctx.isLoggedIn && <h1 onClick={ctx.change}>Logged In</h1> }
        </div>
    )
}
export default Users;