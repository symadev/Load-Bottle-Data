import './Bottle.css';


const Bottle = ({ bottle }) => {
    const { name, img, price, ratings } = bottle; // Added ratings
    return (
        <div className='bottle'>
            <h2>Bottle: {name}</h2>
            <img src={img} alt={name} />
            <h2>Price: ${price}</h2>
            <h2>Ratings: {ratings}</h2> {/* Fixed ratings */}
        </div>
    );
};

export default Bottle;
