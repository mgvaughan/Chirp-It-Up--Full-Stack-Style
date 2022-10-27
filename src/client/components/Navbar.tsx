import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <div className="bg-dark">
        <Link className="btn btn-outline-info m-2" to={"/"}>Home</Link>
        <Link className="btn btn-outline-info m-2" to={"/create"}>Create a chirp</Link>
        <Link className="btn btn-outline-info m-2" to={"/chirps"}>View all Chirps</Link>
    </div>
}

export default Navbar;