const getLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
};

const saveToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
};

const addToLocalStorage = (id) => {
    const cart = getLocalStorage();

    cart.push(id);
    saveToLocalStorage(cart);
};

const removeItem = id => {
    const storedCart = getLocalStorage();
    const updateCart = storedCart.filter(x => x !== id);
    saveToLocalStorage(updateCart);
}

export { addToLocalStorage, getLocalStorage, removeItem };
