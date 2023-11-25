import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AppContext } from '../App'
import Axios from "axios";
export const Home = (props)=> {

    const {data} = useQuery(["cat"], ()=>{ return Axios.get("https://catfact.ninja/fact").then((res) => res.data);


        } );



    const { username } = useContext(AppContext);
    return<h1>Home page working <p>{data.fact}</p>
        welcome {username}
    </h1>
};