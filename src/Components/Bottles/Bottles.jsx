import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    // Load data
    useEffect(() => {
        fetch('Bottle.json') // Ensure correct path
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);

    return (
        <div>
            <h2>Loaded Bottles Here: {bottles.length}</h2>
            <div className="Bottles-Container">
            {
                bottles.map(bottle => 
                    <Bottle key={bottle.id} bottle={bottle} ></Bottle>
                )
            }
            </div>
        </div>
    );
};

export default Bottles;
