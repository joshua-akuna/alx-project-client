import './App.css';
import foto from './sa_arg_brazil.jpg';

function App() {
  return (
    <div className='blog'>
      <header>
        <a href='' className='logo'>JBlog</a>
        <nav>
          <a href=''>Login</a>
          <a href=''>Register</a>
        </nav>
      </header>
      <article className='post'>
        <div className='img'>
          <img src={foto} alt=''></img>
        </div>
        <div className='text'>
          <h2>Full house battery backup coming later this year</h2>
          <p className='info'>
            <a className='author'>Akuna Joshua</a>
            <time>2023-01-06 20:50</time>
          </p>
          <p className='summary'>Today at its special launch event, home backup power giant Ecoflow launched a flurry of new products, including a `Whole-home Backup Power Solution`</p>
        </div>
      </article>
    </div>
  );
}

export default App;
