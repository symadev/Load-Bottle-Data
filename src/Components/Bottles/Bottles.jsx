import { useEffect } from "react";
import { useState } from "react";


const Bottles = () => {
    const[bottles, setBottles] = useState([])

    //for load data

    useEffect(() => {
fetch('Bottle.json')//must put the currect json file name 
.then (res=> res.json())
.then (data=> setBottles(data));

    }, []);
    return (
        <div>
            <h2>Loaded Bottles Here: {bottles.length} </h2>
        </div>
    );
};

export default Bottles;