import React, { useEffect, useState } from 'react';
import Tasks from './Tasks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
    const [isReload, setIsReload] = useState(false)
    const [tasks, setTasks] = useState([])
    const [select, setSelect] = useState('')
    useEffect(() => {

        fetch("http://localhost:5000/tasks")
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [isReload]);

    const handlePost = (event) => {
        event.preventDefault();
        const taskName = event.target.task.value;
        const taskDesc = event.target.description.value;


        fetch("http://localhost:5000/task", {
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

    const handleComplete = (id) => {
        // console.log(id) 
        const selected = tasks.filter(task => task._id === id)
        console.log(selected)
        const result = selected.map(select => setSelect(select._id))
        toast('task completed ')
    }
    return (
        <div className='container'>
            <div className=" p-3 ">
                <form className="container " onSubmit={handlePost}>
                    <div className="input-group mb-3 mt-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your name"
                            aria-label="Username"
                            name="task"
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text">Your notes</span>
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