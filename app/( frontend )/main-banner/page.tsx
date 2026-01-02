"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Data from "@/app/data/solecraft.json";
import Category from "@/app/components/category";
import { Button } from "@/app/components";

export default function MainBanner(){
  const images = Data.BannerItem.images; 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);



    return(
    <>  
    
      <section className="min-h-screen grid md:grid-cols-[60%_40%] grid-cols-1">
        <div className="relative min-h-[40vh] md:h-screen overflow-hidden">
          <Image
            src={images[index]}
            alt="Banner Image"
            fill
            unoptimized
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center md:px-16 px-4">
          {Data.BannerItem.description.map((line, index) => (
            <h3 key={index} className="md:text-8xl text-6xl font-bold">{line}</h3>
          ))}
          {Data.BannerItem.subdescription.map((line, index) => (
            <p key={index} className="md:text-xl text-gray-700">{line}</p>
          ))}
        </div>
      </section>


      <section className="bg-black relative px-6 md:px-20 pt-25 pb-15">
        <div className="absolute pointer-events-none">
          <h1 className="md:text-9xl text-6xl font-bold ">
            Explore Our <br /> Brands
          </h1>
        </div>
        <div className="relative z-10 grid md:grid-cols-[40%_60%] grid-cols-1">
          <div className="flex items-center">
            <h4 className="text-white md:text-5xl text-xl font-bold">
              Discover the World’s Most <br /> Loved Shoe Brands
            </h4>
          </div>
          <div>
            <p className="text-white text-xl max-w-xl">
              We bring together the world’s most trusted and stylish shoe brands,
              crafted for comfort, durability, and timeless design.
            </p>
            <div className="grid grid-cols-3 gap-5 mt-12">
              {Data.TrendingItem.map((items) => (
                <div key={items.id} className="overflow-hidden rounded-xl text-center hover:scale-110">
                  <div className="relative md:h-64 h-36 w-full">
                    <Image
                      src={items.image}
                      alt="brand-image"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="md:text-xl text-lg font-bold bg-white py-2">
                    {items.about}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-6 grid-cols-3 gap-10 px-6 md:py-5 py-3 bg-black">
          {Data.BrandItem.map((items) => (
            <div key={items.id} className="flex justify-center items-center ">
              <Image
                src={items.image}
                alt="brand-card"
                width={90}
                height={60}
                className="object-contain md:h-25 h-10"
              />
            </div>
          ))}
      </section>

      <section>
        <Category />
      </section>
     
      <section className="">
        <div className="grid md:grid-cols-[60%_40%] grid-cols-2">
          <div className="relative h-[250px] md:h-[350px] w-full">
            <Image src={Data.DiscountItem.image} alt="Second-Banner" 
             fill
             unoptimized
            className="object-cover"
            />
          </div>
            <div className="bg-stone-400">
          </div>
        </div>   
      </section>

      <section className="container md:py-15 py-8 ">
        <div className="relative">
        <h2 className="text-center md:text-5xl text-2xl font-bold text-stone-700">
          Best Selling Catalogue
        </h2>      
      
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:mt-10 md:px-28 px-6 relative z-10">
          {Data.BestsellItem.map((items) => (
            <div key={items.id} className="border border-gray-300 shadow-xl overflow-hidden
              text-center mt-5 hover:scale-110 rounded-xl">
              <div className="relative h-30 md:h-64  overflow-hidden">
                <Image
                  src={items.image}
                  alt="best-sell-image"
                  fill
                  unoptimized
                  className="object-cover w-full"
                />
              </div>      
            <div className="grid">
              <div className="px-4 py-3 min-w-0">
                <p className="truncate font-semibold">
                  {items.about}
                </p>
                <span className="text-gray-600 text-sm">
                  {items.rate}
                </span>
              </div>
            </div>
            </div>
          ))}
        </div>
        </div>
        <div className="flex justify-center text-white">
        </div>
      </section>

      <section className="container bg-yellow-100">
        <div className="grid md:grid-cols-2 grid-cols-1 md:px-28 px-6 md:h-120 w-full">
           <div className="w-full md:mt-35 mt-5">
            <h2 className="md:text-7xl text-3xl font-bold">
              {Data.NewArrivalBanner.heading}
            </h2>
            {Data.NewArrivalBanner.description.map((line, index) => (
              <p key={index} className="md:text-xl text-sm ">{line}</p>
            ))} 
            <div>
              <Button className="md:mt-15 mt-3 text-black bg-amber-300 hover:rounded-2xl"/>
            </div>
          </div>
          <div className="md:mt-0 mt-5 relative flex item center bg-stone-400 min-h-[200px] md:min-h-full">
            <Image src={Data.NikeItem.image3} alt="arrival-image" 
            fill
            className="object-contain"/>
          </div> 
        </div>
      </section>





    </>   
    );
}