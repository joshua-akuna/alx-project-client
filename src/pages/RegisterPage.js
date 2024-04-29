import { useState } from "react";

export default function RegisterPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function register(e){
        e.preventDefault();
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.status !== 200){
            // console.log(await response.json())
            alert("User registration failed")
        } else {
            //console.log(await response.json())
            alert("User registration successful")
        }
    }

    return(
        <div className="form">
            <form className="register" onSubmit={register}>
                <h2>Register</h2>
                <input type="text" 
                        placeholder="Username"
                        value={username}
                        onChange={e=>setUsername(e.target.value)}/>
                <input type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                <input type="submit" value="Register"/>
            </form>
        </div>
    );
}