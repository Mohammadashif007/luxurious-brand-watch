import { useEffect } from "react";
import { useState } from "react";
import Watch from "../Watch/Watch";
import { MdDelete } from "react-icons/md";
import {
    addToLocalStorage,
    getLocalStorage,
    removeItem,
} from "../../utilities/localStorage";

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

    useEffect(() => {
        const storedCart = getLocalStorage();
        // const cartItems = storedCart.map(cartId => watches.find(watch => watch.id === cartId));
        // setCartItem(cartItems);
        // const cartItems = [];
        // for(const cartId of storedCart){
        //     const item = watches.find(x => x.id === cartId)
        //     cartItems.push(item);
        // }
        // setCartItem(cartItems);
        const cartItems = storedCart.map(cartId => watches.find(watch => watch.id === cartId));
        setCartItem(cartItems);
    }, [watches]);

    const handleAddToCart = (watch) => {
        setCartItem([...cartItem, watch]);
        addToLocalStorage(watch.id);
    };

    const removeItemFromCart = id =>  {
        removeItem(id)
        const updateCart = cartItem.filter(x => x.id !== id);
        setCartItem(updateCart)
        
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Luxurious Brand Watch</h1>
            <div className="flex gap-2 my-10 w-11/12 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-9/12">
                    {watches.map((watch) => (
                        <Watch
                            key={watch.id}
                            watch={watch}
                            handleAddToCart={handleAddToCart}
                        ></Watch>
                    ))}
                </div>
                <div className="w-1/4  rounded-2xl">
                    <div className="flex justify-between gap-3  p-3">
                        <p>img</p>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Action</p>
                    </div>
                    {cartItem.map((x) => (
                        <div
                            key={x?.id}
                            className="flex justify-between items-center gap-3  p-3"
                        >
                            <img
                                width="60px"
                                className="rounded-full h-[60px]"
                                src={x?.image}
                                alt=""
                            />
                            <p>{x?.brand}</p>
                            <p>{x?.price}</p>
                            <MdDelete className="text-[20px] cursor-pointer" onClick={()=> removeItemFromCart(x.id)}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Watches;
