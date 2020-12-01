import React from 'react';
import { Link } from 'react-router-dom'
const header = () => {
    return (
        <div>
            <h1>hello this is header</h1>
            <Link to= '/'>home</Link>
            <Link to= '/about'>About</Link>
            
        </div>
    );
}

export default header;
