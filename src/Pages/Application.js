import React from 'react';
import { Link } from 'react-router-dom';

const Application = () => {
    return (
        <div>
            <h1>Welcome to our simple Website</h1>
            <p>To try our app, Click on this link <Link to='/todo'>Todo-app</Link></p>
            <p>To try our app, Login first <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Application;