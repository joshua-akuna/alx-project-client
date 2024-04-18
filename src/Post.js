import foto from './sa_arg_brazil.jpg'

export default function Post(){
    return (
        <article className='post'>
            <div className='img'>
                <img src={foto} alt=''></img>
            </div>
            <div className='text'>
                <h2>Full house battery backup coming later this year</h2>
                <p className='info'>
                    <a href='' className='author'>Akuna Joshua</a>
                    <time>2023-01-06 20:50</time>
                </p>
                <p className='summary'>Today at its special launch event, home backup power giant Ecoflow launched a flurry of new products, including a `Whole-home Backup Power Solution`</p>
            </div>
        </article>
    );
}