import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";


const Navbar = () => {

    const { state, setState } = useContext(UserContext);
    console.log(`the navbar user ${state} `);
    

    const RenderList = () => {

        if (!state) {
            return (
                <>
                    


                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">AboutPage</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/signup">Register</NavLink>
                                    </li>




                               
                </>

            )
        } else {
            return (
                <>
                    


                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">AboutPage</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/logout">LogOut</NavLink>
                                    </li>

                </>
            )
        }
    };


    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">
                        XYX-Comp
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">


            <RenderList />
           
            </ul>
            </div>
            </nav>

        </>
    )
}

export default Navbar
