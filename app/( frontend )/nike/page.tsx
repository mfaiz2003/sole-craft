"use client";

import Data from "../solecraft.json";
import Image from "next/image";
import { Header } from "@/app/components";

export default function Nike(){

    return(
    
        <>
        
        {/* Banner section */}

        <section className="container">
        <div className="bg-black">
          <Header/>
        </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:h-[50vh] h-[50vh] bg-black md:py-0 py-15">

              <div className="relative overflow-hidden">
                <Image src={Data.NikeItem.image2}
                alt="Banner-Image2"
                fill
                unoptimized
                className="object-contain"/>
              </div>
              <div className="relative flex items-center justify-center mask-b-from-slate-100 text-white md:text-[200px] 
              text-9xl font-bold italic">
                <h1>Nike</h1>
              </div>
            </div>
        </section> 

        {/* brand section */}

        <section className="bg-linear-to-b via-violet-200 py-15 md:px-28 px-6">
          <div className="grid md:grid-cols-[63%_34%] grid-cols-1 md:gap-10 gap-10 md:h-120 h-auto">
             <div className="relative w-full overflow-hidden p-20">
              <Image src={Data.NikeItem.image1}
              alt="Product-image" 
              fill
              className="object-cover w-full md:rounded-l-2xl rounded-t-2xl"/>
             </div>

             <div className="md:px-15 px-6 md:py-10 py-4 md:rounded-r-2xl rounded-b-2xl shadow-xl bg-white">
              <h1 className="text-3xl font-bold">Air Jordan Dunk High</h1>
              <div className=" flex gap-2 mt-5">
                <button type="submit" className="border border-gray-300 py-2 w-15 rounded-lg hover:bg-black hover:text-white">6</button>
                <button type="submit" className="border border-gray-300 py-2 w-15 rounded-lg hover:bg-black hover:text-white">7</button>
                <button type="submit" className="border border-gray-300 py-2 w-15 rounded-lg hover:bg-black hover:text-white">8</button>
                <button type="submit" className="border border-gray-300 py-2 w-15 rounded-lg hover:bg-black hover:text-white">9</button>
                <button type="submit" className="border border-gray-300 py-2 w-15 rounded-lg hover:bg-black hover:text-white">10</button>
              </div>
             </div>

          </div>
        </section>

        </>
    );
}