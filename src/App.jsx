import './App.css'
import Button from "./components/button.jsx";
import {useState} from "react";
import Form from "./components/form.jsx";
import TaskList from "./components/taskList.jsx";

function App() {

    const [displayForm, setDisplayForm] = useState(false);
    const buttonLabel = displayForm ? "Fermer le formulaire" : "Ajouter une tâche";
    const [tasks, setTasks] = useState([]);

    const updateTasks = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const completeTask = (index) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task, i) => {
                if (i !== index) {
                    return task;
                } else {
                    task.done = true;
                    return task;
                }
            });
        });
    };

    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
    };


    return (
        <main className="flex flex-col gap-10">
            <header><h1>TodoList</h1></header>
            <Button
                label={buttonLabel}
                onClick={() => setDisplayForm(!displayForm)}
            />
            <Form show={displayForm} addTask={updateTasks}/>
            <TaskList tasks={tasks} complete={completeTask} remove={removeTask}/>
        </main>
    )
}

export default App
