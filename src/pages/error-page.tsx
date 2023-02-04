import { useRouteError } from "react-router-dom"


export default function ErrorPage(){

    const error: any = useRouteError()
    console.error(error)

    return(
        <div>
            <h1>Oops! Erro Amigo😒</h1>
            <i>{error?.statusText || error?.message}</i>
        </div>
    )
}