import React, { useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import {UserContext} from "../App";

const Logout = () => {
    // promises 
    const { state, setState } = useContext(UserContext);
    const history = useHistory();

        
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
        }).then((res) => {
            setState(false);
            history.push('/login', { replace: true });
            if (res.status !== 200) {
               console.log('errr')
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <>
           
        </>
    )
}

export default Logout
