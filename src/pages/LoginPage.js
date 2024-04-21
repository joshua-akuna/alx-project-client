export default function LoginPage(){
    return(
        <div className="form">
            <form className="login">
                <h2>Login</h2>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}