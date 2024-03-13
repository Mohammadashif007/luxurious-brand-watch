const Watch = ({ watch, handleAddToCart }) => {
    const { model, price, image, id } = watch;
    return (
        <div className="border-2 border-[#001524] rounded-2xl">
            <img
                className="h-[250px] rounded-t-2xl"
                width="100%"
                src={image}
                alt=""
            />
            <div className="flex flex-col justify-between items-center gap-3 my-5">
                <p className="text-[22px] font-bold">{model}</p>
                <p className="font-bold text-[20px]">{price}</p>
                <button onClick={() => handleAddToCart(watch)} className="bg-[#001524] px-9 py-3 rounded-2xl text-[#fff]">
                    Details
                </button>
            </div>
        </div>
    );
};

export default Watch;
