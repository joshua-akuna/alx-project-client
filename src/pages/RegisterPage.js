export default function RegisterPage(){
    return(
        <div className="form">
            <form className="register">
                <h2>Register</h2>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Register"/>
            </form>
        </div>
    );
}