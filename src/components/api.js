import React, { useState, useEffect, Component } from "react";
import axios from "axios";
const count = 1;
function LoadImages(){
    const [state, setState] = useState([])
    useEffect(() => {
        axios
        .get("https://demo5636362.mockable.io/stats")
        .then((data) => {
            setState(data.data);
        });
    } , [count])
    return state;
}

export {LoadImages};