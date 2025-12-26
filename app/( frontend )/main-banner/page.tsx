"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Data from "../solecraft.json";
import {
  Button,
  Header,
  Gender,
  Carousel,
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
  }, [images]);

  const router = useRouter();

    return(
    <>  
    
      <section className="container min-h-screen">
      <div className="bg-gray-300 relative">
        <Header/>
      </div>

        <div className="flex flex-col md:grid md:grid-cols-2 h-full">
           <div className="relative min-h-[40vh] md:h-screen overflow-hidden">
            <Image
              src={images[index]}
              alt="Banner Image"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="md:px-28 px-6 min-h-[60vh] md:h-auto flex flex-col justify-center">
          <Snowfall color="black" />
            {Data.BannerItem.description.map((line, index) => (
              <h3 key={index} className="md:text-8xl text-6xl font-bold">{line}</h3>
            ))}
            {Data.BannerItem.subdescription.map((line, index) => (
              <p key={index} className="md:text-xl text-gray-700">{line}</p>
            ))}
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
                className="object-contain md:h-25 h-10"
              />
            </div>
          ))}
        </div>
        <div className="text-center font-bold text-gray-700 md:text-5xl text-3xl md:mt-10 mt-5">
          <h3>Shop By Brands</h3>
        </div>

        <div className="grid md:grid-cols-[40%_60%] md:px-28 px-4 md:pt-15">
        <div className="py-5 w-auto">
          <h5 className="md:text-2xl text-lg text-gray-700 ">Our Trending shoe</h5>
          <h3 className=" font-bold md:text-6xl text-4xl text-gray-700">Most Popular<br /> Products</h3>
          <p className="md:text-2xl text-lg text-gray-700">Top trending products everyone’s buying</p>
          <Button onClick={() => router.push ("/nike")} className="md:mt-10 mt-5 text-white"/>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
          {Data.TrendingItem.map((items) => (
            <div key={items.id} className="border border-gray-300 overflow-hidden bg-white
             flex flex-col items-center shadow-xl hover:scale-110 hover:transition-transform duration-500 md:py-0 py-2">
           <div className="relative md:h-64 h-36 w-full">
              <Image
                src={items.image}
                alt="puma-image"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="md:text-xl text-lg font-bold ">
              <p>{items.about}</p>
            </div>
          </div>
          ))}  
        </div>
      </div>
      </section>

    {/* Discount section */}

    <section className="mt-10 bg-black">
      <div className="grid md:grid-cols-[70%_30%] grid-cols-2 md:h-70 h-50">
        <div className="w-full flex justify-center items-center overflow-hidden">
          <Image src={Data.DiscountItem.image} alt="Second-Banner" 
           height={1000}
           width={1000}
          className="object-cover w-full"
          />
        </div>
        <div className="flex flex-col justify-center md:px-10 px-6">
         <h3 className="md:text-5xl text-2xl font-bold text-white">{Data.DiscountItem.heading}</h3>
         <p className="md:text-xl text-md text-white">{Data.DiscountItem.description}</p>
        <div>
         <Button className="md:my-6 my-3 bg-white" />
        </div>        
        </div>
      </div>
    </section>


    {/* Best-selling section  */}
      
      <section className="container py-15 bg-linear-to-t via-violet-50 ">
        <div className="relative">
        <h2 className="text-center md:text-5xl text-2xl font-bold mask-b-from-slate-100">
          Best Selling Catalogue
        </h2>      
        <Gender className="flex justify-center mt" />      
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-10 md:px-28 px-6 relative z-10">
          {Data.BestsellItem.map((items) => (
            <div
              key={items.id}
              className="border border-gray-300 shadow-xl overflow-hidden
              text-center mt-5 bg-white hover:scale-110 hover:transition-transform duration-500">
              <div className="relative h-35 md:h-64  overflow-hidden">
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
        <div className="flex justify-center mt-15 text-white">
          <Button className=""/>
        </div>
      </section>

    {/* Second-Banner-section */}

        <section className="container bg-violet-500">
          <div className="grid md:grid-cols-2 grid-cols-1 md:px-28 px-6 md:h-130 w-full">
             <div className="w-full md:mt-35 mt-5">
              <h2 className="md:text-7xl text-3xl font-bold  text-white">
                {Data.NewArrivalBanner.heading}
              </h2>
              {Data.NewArrivalBanner.description.map((line, index) => (
                <p key={index} className="md:text-xl text-sm text-white">{line}</p>
              ))} 
              <div>
                <Button className="md:mt-15 mt-3 bg-white text-black hover:bg-amber-300 hover:rounded-2xl"/>
              </div>
            </div>
            <div className="md:mt-0 mt-5 items-center flex justify-center md:py-8">
              <Image src={Data.NikeItem.image3} alt="arrival-image" 
              height={500}
              width={500}
              className="object-contain"/>
            </div> 
          </div>
        </section>

    {/* Category-section */}

    <section className="container md:px-28 px-6 pt-10 pb-20 ">
        <div className="category-heading flex flex-col items-center">
          <h3 className="md:text-5xl text-2xl text-center font-bold mask-b-from-slate-100">Our Product's Category</h3>
          <p className="md:mt-6 mt-3 md:text-xl text-sm text-gray-700">“From design to delivery, every product reflects our commitment to quality.</p>
          <p className="md:text-xl text-sm text-gray-700">durability, and customer satisfaction—because you deserve products that truly fit your lifestyle.”</p>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-3 gap-6 mt-10 items-center w-full ">
          {Data.CategoryItem.map((items) => (
            <div key={items.id} className="w-full relative md:h-86 h-35 border border-gray-50 backdrop-blur-sm
             overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image src={items.image} alt="category-image"
               fill
               unoptimized
              className="object-cover w-full md:h-60 h-40 relative rounded-full"
              />
              <h3 className="absolute inset-0 z-10 flex items-center justify-center
              md:text-2xl text-md font-semibold text-white text-center">{items.title}</h3>
            </div>
          ))}
        </div>
    </section>
    

    {/* Testimonial-section */}

    <section className="container pb-15">
      <h4 className="md:text-5xl text-2xl font-bold text-center mb-12 mask-b-from-slate-100">
        " What's Our Customers Say "
      </h4>
      <div className="w-full md:px-28 px-6">
        <Carousel items={Data.TestimonialItem} />
      </div>
    </section>

    {/* news-letter section */}
      
      <section className="bg-linear-to-b from-violet-300 via-violet-200 to-violet-200 mt-10">
        <div>
          <NewsLetter />
        </div>
      </section>
    </>   
    );
}