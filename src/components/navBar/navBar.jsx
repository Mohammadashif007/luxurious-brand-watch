import { GiClockwork } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";

export const NavBar = () => {
    return (
        <div className="flex justify-between bg-[#001524] text-[#fff] mx-auto px-10 py-5">
            <GiClockwork className="text-2xl" />
            <FaCartShopping className="text-4xl"  />
        </div>
    );
};
