import { Link } from 'react-router-dom'

export function Home(){
    return(
        <div>
            <h1>Login</h1>
            <Link to={'about'}>Pagina Sobre</Link>
            <input type='text' placeholder='Digite sua senha'/>
            <button>Login</button>
        </div>
    )
}