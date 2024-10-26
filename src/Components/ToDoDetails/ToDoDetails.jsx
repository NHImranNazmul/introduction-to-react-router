import { useLoaderData } from "react-router-dom";


const ToDoDetails = () => {
    const toDo = useLoaderData();
    const {id, title} = toDo
    return (
        <div>
            <h2>Todo Details: {id}</h2>
            <p>{title}</p>
        </div>
    );
};

export default ToDoDetails;