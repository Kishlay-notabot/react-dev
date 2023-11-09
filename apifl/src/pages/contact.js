import { useState } from "react";

export const Profile = (props)=> {
    const [newUsername, SetNU] = useState("")
    return<h1> Profile = {props.username}
    <ChangeProfile SetNU={props.setUsern}/>
    </h1> 
};
export const ChangeProfile = (props) => {
return <div>
    <input onChange={(event)=>{setUsern(event.target.value)
    }}
    />
    <button onClick={()=>{props.setUsern(newUsername)}}>Change username</button>
</div>
}

