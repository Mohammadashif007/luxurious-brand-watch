import { useEffect } from "react";
import { useState } from "react";
import Watch from "../Watch/Watch";

const Watches = () => {
    const [watches, setWatches] = useState([]);
    const [cartItem, setCartItem] = useState([]);


    const url = "data.json";
    const watchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setWatches(data);
    };

    useEffect(() => {
        watchData();
    }, []);


    const handleAddToCart = watch => {
        setCartItem([...cartItem, watch]);
    } 

    console.log(cartItem);

    return (
        <div>
            <h1 className="text-3xl font-bold ">Luxurious Brand Watch</h1>
            <div className="flex gap-5 my-10 ">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-9/12">
                    {watches.map((watch) => (
                        <Watch key={watch.id} watch={watch} handleAddToCart={handleAddToCart}></Watch>
                    ))}
                </div>
                <div className="w-1/4 bg-[#001524] rounded-2xl">
                    <div className="flex justify-between gap-3 text-[#fff] p-3">
                        <p>img</p>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Action</p>
                    </div>
                    {
                        cartItem.map(x => <div key={x.id} className="flex justify-between gap-3 text-[#fff] p-3">
                            <img width='60px' src={x.image} alt="" />
                            <p>{x.brand}</p>
                            <p>{x.price}</p>
                            
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Watches;
