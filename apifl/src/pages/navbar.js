import { Link } from 'react-router-dom'
export const Nav=() => {
    return(
        <div>navbar
    <Link to="/home"> home </Link> 
    <Link to="/ab"> about </Link> 
    <Link to="/ct"> contact </Link> </div>
    )
}