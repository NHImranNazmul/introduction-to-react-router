import { Link } from "react-router-dom";


const ToDo = ({toDo}) => {
    const {id, title} = toDo;
    const toDoStyle ={
        border:'2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={toDoStyle}>
            <h2>ToDo id: {id}</h2>
            <p>{title}</p>
            <Link to={`/toDo/${id}`}>ToDo Details</Link>
        </div>
    );
};

export default ToDo;