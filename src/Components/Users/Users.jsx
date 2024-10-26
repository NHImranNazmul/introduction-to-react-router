import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const usersStyle ={
        display: 'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gap: '10px'

    }

    // for receive data
    const users = useLoaderData()

    // ....  if I want to load data
    //   state--> data
    // state --> loader
    // use effect
    // fetch --> state ---> set state
    // -------
    // console.log(users); for check data is avaible or not
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <h2>Users Interface</h2>

            {/* for show the data in UI */}
            <div style={usersStyle}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;