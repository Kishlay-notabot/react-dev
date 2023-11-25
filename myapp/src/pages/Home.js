import { useContext } from "react";
import { AppContext } from '../App'
export const Home = ()=> {
    const { username } = useContext(AppContext);
    return<h1>Home page working
        welcome {username}
    </h1>
};