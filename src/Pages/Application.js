import React from 'react';
import { Link } from 'react-router-dom';

const Application = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <div>
                <h1>Welcome to our simple Website</h1>
                <p className='text-center'>To try our app, Click on this link to use the <Link to='/todo'>Todo-app</Link></p>
                <p className='text-center'>😊</p>
            </div>
        </div>
    );
};

export default Application;