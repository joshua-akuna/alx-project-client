import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <a href='/' className='logo'>JBlog</a>
            <nav>
                <a href='/login'>Login</a>
                <a href='/'>Register</a>
            </nav>
        </header>
    );
}