import { useNavigate } from "react-router-dom"


export function About(){

    const navigate = useNavigate()

    function handleBackHome(){
        navigate('/')
    }
    return (
        <div>
            <h2>
                Pagina Sobre
            </h2>
            <ul>
                <li>Luis</li>
                <li>Pedro</li>
            </ul>
            <button onClick={handleBackHome}>Voltar Para Home com Navigate</button>
        </div>
    )
}