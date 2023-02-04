import { useNavigate } from "react-router-dom"

type Props = {
    children : JSX.Element
}

export const RequireAuth = ({children}: Props) =>{
    const navigate = useNavigate()
    const isAuth = false

    if(isAuth){
        return children
    }else {
        navigate('/about')
        return null
    }
}