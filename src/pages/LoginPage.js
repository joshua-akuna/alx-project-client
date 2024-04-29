import { useState } from "react";

export default function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login(event){
        event.preventDefault()
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        })
        console.log(await response.json())
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