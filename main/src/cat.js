import { useQuery } from "@tanstack/react-query";
import Axios from "axios"
export const Cat = () =>{
    const { data: catD} = useQuery(["cat"], async () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);

    });
    return (
        <div>
            <h4>{catD?.fact}</h4>
        </div>
    )
}