"use client";

export default function Header(){
    return(
        <section className="md:h-13">
            <div className="absolute hidden z-10 flex mt-3 justify-between w-full pl-18 pr-18">
                <div className="font-extrabold text-2xl text-white">
                    <h3>SoleCraft</h3>    
                </div>
                <div>
                    <ul className="flex gap-12 text-white">
                        <li><a href="#" className="hover:font-bold">Shop</a></li>
                        <li><a href="#" className="hover:font-bold">Collection</a></li>
                        <li><a href="#" className="hover:font-bold">About</a></li>
                        <li><a href="#" className="hover:font-bold">Contact</a></li>
                    </ul>
                </div>
                <div className="flex gap-5">
                    <div className="text-white flex items-center hover:text-lg hover:font-bold">
                        <button>LogIn</button>
                    </div>
                </div>
            </div>
        </section>
    );
}