import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    // I load data with fetch in loader, now i want to access the data
    const user = useLoaderData();
    const{name}=user
    return (
        <div>
            <h2>Details about user:{name}</h2>
        </div>
    );
};

export default UserDetails;