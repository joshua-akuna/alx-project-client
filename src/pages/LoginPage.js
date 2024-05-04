import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    async function login(event){
        event.preventDefault()
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        if (response.ok){
            setRedirect(true)
        } else {
            console.log('invalid username or password')
        }
    }

    if (redirect){
        return <Navigate to={'/'} />
    }

    return(
        <div className="form">
            <form className="login" onSubmit={login}>
                <h2>Login</h2>
                <input type="text" 
                       placeholder="Username"
                       value={username}
                       onChange={e=> setUsername(e.target.value)}/>
                <input type="password"
                       placeholder="Password"
                       value={password}
                       onChange={e=> setPassword(e.target.value)}/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}