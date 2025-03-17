import Task from "./task.jsx";

const TaskList = (props) => {
    const {tasks, complete, remove} = props;

    return (<ul>
        {tasks.map((task, index) => (
            <li key={index}>
                <Task task={task} index={index} complete={complete} remove={remove}/>
            </li>
        ))}
    </ul>)
}

export default TaskList;