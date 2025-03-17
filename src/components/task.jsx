import styled from "styled-components";
import TaskCTA from "./taskCTA.jsx";

const Div = styled.div`
    background-color: rgba(0, 0, 0, 0.03);
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    border-radius: 10px;

    &.completed h4 {
        color: grey;
        text-decoration: line-through;
    }
`;

const Task = (props) => {
    const {task: {label, done}, index, complete, remove} = props;
    
    return (
        <Div className={done ? "completed" : ""}>
            <h4>{label}</h4>
            <div>
                <TaskCTA done={done} index={index} complete={complete} remove={remove}/>
            </div>
        </Div>
    )
}

export default Task;