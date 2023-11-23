import { useContext } from "react";
import { AppContext } from '../App'

export const Profile = () => {
  const { username } = useContext(AppContext)
    return (
      <div>
        <h1> Profile = {username}</h1>
        {/* <div><ChangeProfile /></div> */}
      </div>
    );
  };
  
  // export const ChangeProfile = () => {
  //   return (
  //     <div>
  //       <input />
  //       <button>Change username</button>
  //     </div>
  //   );
  // };

  // useContext completed now do react query module10
  