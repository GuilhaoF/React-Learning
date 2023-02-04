import { useParams} from 'react-router-dom'


export function ProfilePage(){

    let {name} = useParams()

    return (
        <div>
            <h2 style={{ color: '#2ecc71'}}> Funcionario :</h2>
            <span style={{color:'#2980b9'}}>{name}</span>
        </div>
    )
}