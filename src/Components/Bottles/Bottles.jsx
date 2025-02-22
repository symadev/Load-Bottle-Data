import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addTols } from "../../Utilities/localstorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart,setCart] = useState([]);

    // Load data
    useEffect(() => {
        fetch('Bottle.json') // Ensure correct path
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);


    const handleAddCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addTols(bottle.id);
    }

    return (
        <div>
            <h2>Loaded Bottles Here: {bottles.length}</h2>
            <h2>Cart:{cart.length}</h2>
            <div className="Bottles-Container">
            {
                bottles.map(bottle => 
                <Bottle key={bottle.id} bottle={bottle}  handleAddCart={ handleAddCart}></Bottle>
                )
            }
            </div>
        </div>
    );
};

export default Bottles;
