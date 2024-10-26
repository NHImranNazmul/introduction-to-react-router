import { useLoaderData } from "react-router-dom";
import ToDo from "../ToDo/ToDo";


const ToDos = () => {
    const toDosStyle ={
        display: 'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gap: '10px'

    }
    const toDos = useLoaderData();
    return (
        <div style={toDosStyle}>
            <h2>ToDos List: {toDos.length}</h2>
            {
                toDos.map(toDo=> <ToDo key={toDo.id}  toDo={(toDo)}></ToDo>)
            }
        </div>
    );
};

export default ToDos;