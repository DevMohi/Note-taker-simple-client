import React from 'react';

const Tasks = ({ task, isReload, setIsReload, select, handleComplete }) => {
    // console.log(task) 
    const { _id, taskName, taskDesc } = task



    const handleDelete = (id) => {
        console.log(id)

        fetch(`http://localhost:5000/task/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsReload(!isReload)
            })

    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" style={{ textDecoration: select === _id ? "line-through" : "" }}>Task:{taskName}</h5>
                    <p class="card-text">Task Description:{taskDesc}</p>
                    <div>
                        <button className='btn btn-success' onClick={() => handleComplete(_id)}>Complete</button>
                        <button className='btn btn-danger ms-2' onClick={() => handleDelete(_id)}>Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Tasks;