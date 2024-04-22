import { useState } from "react";

export default function RegisterPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function register(e){
        e.preventDefault();
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return(
        <div className="form">
            <form className="register" onSubmit={register}>
                <h2>Register</h2>
                <input type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}/>
                <input type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                <input type="submit" value="Register"/>
            </form>
        </div>
    );
}