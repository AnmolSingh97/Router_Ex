import React from 'react';
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <h3 className="m-5">This is HomePage</h3>
            <br />
            <br />
            <Link to='/'><span className="m-5 text-warning">Home</span></Link>
            <br />
            <Link to='/weather'><span className="m-5 text-warning">Weather App</span></Link>
            <br />
            <Link to='/about'><span className="m-5 text-warning">About</span></Link>

        </div>
    )
}

export default HomePage
