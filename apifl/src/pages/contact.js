export const Profile = (props) => {
    return (
      <div>
        <h1> Profile = {props.username}</h1>
        <div><ChangeProfile /></div>
      </div>
    );
  };
  
  export const ChangeProfile = () => {
    return (
      <div>
        <input />
        <button>Change username</button>
      </div>
    );
  };
  