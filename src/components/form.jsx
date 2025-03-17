import styled from "styled-components";
import Button from "./button.jsx";
import {useState} from "react";

const Form = styled.form`
    display: ${(props) => (props.show ? "inline-flex" : "none")};
    background-color: rgba(0, 0, 0, 0.05);
    padding: 20px;

    input {
        border: none;
        border-bottom: 2px solid darksalmon;
        outline: none;
        background: none;
    }
`;

const Formulaire = (props) => {

    const [task, setTask] = useState({label: "", done: false});

    const handleChange = (e) => {
        setTask({
            label: e.target.value,
            done: false,
        })
    }

    const saveTask = (e) => {
        e.preventDefault();
        props.addTask(task);
        setTask({label: "", done: false});
    }

    return (
        <Form show={props.show}>
            <input type="text" placeholder="Intitulé de la tâche" onChange={handleChange} value={task.label}/>
            <Button
                label="Ajouter"
                onClick={saveTask}
            />
        </Form>
    );
};

export default Formulaire;