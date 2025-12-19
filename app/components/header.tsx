import Image from "next/image";
import CartIcon from "@/public/assets/cart-icon.png";

export default function Header(){
    return(
        <section>
            <div className="absolute z-10 flex mt-3 justify-between w-full pl-18 pr-18">
                <div className="font-extrabold text-2xl">
                    <h3>SoleCraft</h3>    
                </div>
                <div>
                    <ul className="flex gap-12 ">
                        <li><a href="#" className="hover:text-xl hover:font-bold">Shop</a></li>
                        <li><a href="#" className="hover:text-xl hover:font-bold">Collection</a></li>
                        <li><a href="#" className="hover:text-xl hover:font-bold">About</a></li>
                        <li><a href="#" className="hover:text-xl hover:font-bold">Contact</a></li>
                    </ul>
                </div>
                <div className="flex gap-5">
                    <Image src={CartIcon} alt="cart-icon" className="-translate-y-1 w-8 h-8" />
                    <div className="text-white bg-black pl-4 pr-4 flex items-center">
                        <button>LogIn</button>
                    </div>
                </div>
            </div>
        </section>
    );
}