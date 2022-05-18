import React, { useEffect, useState } from 'react';
import Tasks from './Tasks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
    const [isReload, setIsReload] = useState(false)
    const [tasks, setTasks] = useState([])
    const [select, setSelect] = useState('')
    useEffect(() => {

        fetch("https://quiet-dusk-67625.herokuapp.com/tasks")
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [isReload]);

    const handlePost = (event) => {
        event.preventDefault();
        const taskName = event.target.task.value;
        const taskDesc = event.target.description.value;


        fetch("https://quiet-dusk-67625.herokuapp.com/task", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ taskName, taskDesc })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset()
                setIsReload(!isReload)
                // for reload 
                // const remaining = notes.filter(note => note._id !== )
            })

    }

    const handleComplete = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks)
    }
    return (
        <div className='container'>
            <div className=" p-3 ">
                <form className="container " onSubmit={handlePost}>
                    <div className="input-group mb-3 mt-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Task Name"
                            aria-label="Username"
                            name="task"
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text">Task Description</span>
                        <textarea
                            className="form-control"
                            aria-label="With textarea"
                            name="description"
                        ></textarea>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <input type="submit" value="Add Task" className="btn btn-info" />
                    </div>
                </form>
            </div>

            <div className='row'>
                {

                    tasks.map((task, index) => <Tasks task={task} key={task._id}
                        index={index}
                        isReload={isReload}
                        setIsReload={setIsReload}
                        handleComplete={handleComplete}
                        select={select}
                    ></Tasks>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Todo;