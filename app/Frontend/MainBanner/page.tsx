"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Data from "../solecraft.json";
import {
  Button,
  Header,
  Gender,
  Carousel,
  ForwardIcon,
  NewsLetter
} from "@/app/components";
import Snowfall from "react-snowfall";


export default function MainBanner(){
  const images = Data.BannerItem.images; 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


    return(
    <>    
    <Snowfall color="black" />

    <div className="">
      <Header/>
    </div>   
    
<section className="container h-screen">
  <div className="flex flex-col md:grid md:grid-cols-2 h-full">
     <div className="md:px-28 px-6 h-1/2 md:h-auto flex flex-col justify-center">
      {Data.BannerItem.description.map((line, index) => (
        <h3 key={index} className="md:text-8xl text-6xl font-bold">{line}</h3>
      ))}
      {Data.BannerItem.subdescription.map((line, index) => (
        <p key={index} className="md:text-xl text-gray-700">{line}</p>
      ))}
    </div>
    <div className="relative h-1/2 md:h-screen overflow-hidden">
      <Image
        src={images[index]}
        alt="Banner Image"
        fill
        unoptimized
        className="object-cover"
      />
    </div>
  </div>
</section>


      {/* support & Brand section */}

      <section className="container bg-linear-to-b via-violet-200 ">
    
       <div className="grid md:grid-cols-6 grid-cols-3 gap-10 md:px-28 px-6 md:py-0 py-3 bg-black">
          {Data.BrandItem.map((items) => (
            <div key={items.id} className="flex justify-center items-center ">
              <Image
                src={items.image}
                alt="brand-card"
                width={90}
                height={60}
                className="object-contain md:h-0 h-10"
              />
            </div>
          ))}
        </div>
        <div className="text-center font-bold md:text-5xl text-3xl md:mt-10 mt-5">
          <h3>Shop By Brands</h3>
        </div>

        <div className="grid md:grid-cols-[40%_60%] md:px-28 px-4 md:pt-15 pt-5">
        <div className="py-5 w-auto">
          <h5 className="text-2xl text-gray-700">Our Trending shoe</h5>
          <h3 className=" font-bold md:text-6xl text-5xl ">Most Popular<br /> Products</h3>
          <p className="text-xl text-gray-700">Top trending products everyone’s buying</p>
          <Button className="md:mt-10 mt-5 text-white"/>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
          {Data.TrendingItem.map((items) => (
            <div key={items.id} className="border border-gray-300 rounded-2xl overflow-hidden bg-white
             flex flex-col items-center shadow-xl hover:scale-110 hover:transition-transform duration-500">
            <div className="md:h-64 h-48">
              <Image src={items.image} alt="puma-image"
              height={250}
              width={250}
              className="object-cover"/>
            </div>
            <div className="text-xl font-bold">
              <p>{items.about}</p>
            </div>
          </div>
          ))}  
        </div>
      </div>
      </section>

    {/* Discount section */}

    <section className="mt-10 bg-black">
      <div className="grid md:grid-cols-[70%_30%] grid-cols-[80%-20%]">
        <div className="md:h-62 h-50 w-full flex justify-center items-center overflow-hidden">
          <Image src={Data.DiscountItem.image} alt="Second-Banner" 
           height={1000}
           width={1000}
          className="object-cover w-full"
          />
        </div>
        <div className="flex flex-col justify-center md:px-10 px-6 md:my-0 my-5">
         <h3 className="md:text-5xl text-3xl font-bold text-white">{Data.DiscountItem.heading}</h3>
         <p className="md:text-xl text-lg text-white">{Data.DiscountItem.description}</p>
        <div>
         <Button className="my-6 bg-white" />
        </div>        
        </div>
      </div>
    </section>


    {/* Best-selling section  */}
      
      <section className="container py-15 bg-linear-to-t via-violet-50 ">
        <div className="relative">
        <h2 className="text-center text-5xl font-bold mask-b-from-black-500">
          Best Selling Catalogue
        </h2>      
        <Gender className="flex justify-center" />      
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-6 mt-10 md:px-28 px-6 relative z-10">
          {Data.BestsellItem.map((items) => (
            <div
              key={items.id}
              className="border border-gray-300 rounded-xl shadow-xl overflow-hidden
              text-center mt-5 bg-white hover:scale-110 hover:transition-transform duration-500">
              <div className="h-64 overflow-hidden">
                <Image
                  src={items.image}
                  alt="best-sell-image"
                  height={200}
                  width={200}
                  className="object-cover w-full"
                />
              </div>      
              <div className="grid md:grid-cols-[70%_30%] grid-cols-2">
                <div className="px-4 py-4 flex flex-col items-start">
                  <p className="truncate font-bold">{items.about}</p>
                  <span className="text-gray-600">{items.rate}</span>
                </div>      
                <div className="flex items-center justify-center">
                  <ForwardIcon />
                </div>
              </div>      
            </div>
          ))}
        </div>
        </div>
        <div className="flex justify-center mt-15 text-white">
          <Button className=""/>
        </div>
      </section>

    {/* Second-Banner-section */}

    <section className="container">
      <div className="overflow-hidden">
        <div className="relative h-140 w-full">
          <Image src={Data.NewArrivalBanner.image} alt="Second-Banner" 
           fill
          className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="grid md:grid-cols-2 grid-cols-1 absolute z-10 md:px-28 px-6">
             <div className="w-full md:mt-35 mt-5">
              <h2 className="text-white md:text-7xl text-6xl font-bold mask-b-from-slate-100 ">
                {Data.NewArrivalBanner.heading}
              </h2>
              {Data.NewArrivalBanner.description.map((line, index) => (
                <p key={index}className="text-gray-200 md:text-xl text-md ">{line}</p>
              ))} 
              <div>
                <Button className="md:mt-15 mt-5 bg-white text-black hover:bg-amber-300 hover:rounded-2xl"/>
              </div>
            </div>
            <div className="md:mt-0 mt-5">
              <Image src={Data.DiscountItem.image} alt="arrival-image" 
              height={1000}
              width={1000}
              className="object-contain"/>
            </div>
           </div>
        </div>
      </div>
    </section>

    {/* Category-section */}

    <section className="container md:px-28 px-6 pt-10 pb-20 ">
        <div className="category-heading">
          <h3 className="text-5xl font-bold mask-b-from-slate-100 ">Category</h3>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10">
          {Data.CategoryItem.map((items) => (
            <div key={items.id} className="w-full relative md:h-86 h-60 rounded-xl border border-gray-50 backdrop-blur-sm
             overflow-hidden bg-white hover:scale-105 transition-transform duration-300 shadow-xl">
              <Image src={items.image} alt="category-image"
              height={400}
              width={400}
              className="object-cover w-full h-60 "
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center py-8 tracking-wide">{items.title}</h3>
            </div>
          ))}
        </div>
    </section>
    

    {/* Testimonial-section */}

    <section className="container pb-15">
      <h4 className="text-5xl font-bold text-center mb-12 mask-b-from-slate-100">
        " What's Our Customers Say "
      </h4>
      <div className="w-full md:px-28 px-6">
        <Carousel items={Data.TestimonialItem} />
      </div>
    </section>

    {/* news-letter section */}
      
      <section className="bg-linear-to-b from-violet-400 via-violet-200 to-violet-200 mt-10">
        <div>
          <NewsLetter />
        </div>
      </section>
    </>   
    );
}