"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Data from "@/app/data/solecraft.json";
import Category from "@/app/components/category";
import { Button, Carousel } from "@/app/components";
import NewArrival from "@/app/components/newarrival";


export default function MainBanner() {
  const images = Data.BannerItem.images;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);


  const router = useRouter();

  return (
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

      <section className="grid md:grid-cols-6 grid-cols-3 gap-10 px-6 md:py-0 py-3 bg-black">
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

      <section className="bg-[#f0835b] relative px-6 md:px-20 md:py-15 py-8">
        <div className="absolute pointer-events-none">
          <h1 className="md:text-9xl text-8xl font-bold text-white opacity-25">
            Explore Our <br /> Brands
          </h1>
        </div>
        <div className="relative z-10 grid md:grid-cols-[40%_60%] grid-cols-1">
          <div className="flex flex-col justify-center">
            <h4 className="text-white md:text-5xl text-xl font-bold">
              Discover the World’s Most <br /> Loved Shoe Brands
            </h4>
            <Button onClick={() => router.push("/nike")}
              className="md:mt-15 mt-5 text-black bg-amber-300 hover:rounded-2xl" />
          </div>
          <div className="flex flex-col md:mt-0 mt-5">
            <p className="text-white md:text-xl max-w-xl">
              We bring together the world’s most trusted and stylish shoe brands,
              crafted for comfort, durability, and timeless design.
            </p>
            <div className="grid grid-cols-3 md:gap-5 gap-2 mt-12">
              {Data.TrendingItem.map((items) => (
                <div key={items.id} className="overflow-hidden rounded-xl text-center hover:scale-110">
                  <div className="relative md:h-64 h-30 w-full">
                    <Image
                      src={items.image}
                      alt="brand-image"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="md:text-xl font-bold bg-white md:py-5 py-2">
                    {items.about}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section>
        <Category />
      </section>

      <section className="container md:pb-15 pb-8 ">
        <div className="relative">
          <div className="flex flex-col text-center md:px-0 px-6">
            <h2 className="md:text-5xl text-3xl font-bold text-[#f0835b]">
              Best Selling Catalogue
            </h2>
            <div>
              <p className="md:text-lg text-gray-700 md:mt-6 mt-3">{Data.Bestsell.description}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:mt-10 md:px-28 px-6 relative z-10">
            {Data.Bestsell.items.map((items) => (
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
          <Button className="md:mt-15 mt-10 text-black bg-amber-300 hover:rounded-2xl" />
        </div>
      </section>

      <section>
        <NewArrival />
      </section>


      <section className="container py-15">
        <div className="mb-10 text-center px-6">
          <h4 className="md:text-5xl text-3xl font-bold text-[#f0835b]">What's Our Customers Say</h4>
          <p className="mt-5 md:text-lg  text-gray-700">"Thousands of happy customers, countless real experiences. Our reviews speak for the quality<br />
            reliability, and seamless shopping experience we promise with every order"</p>
        </div>
        <div className="w-full md:px-28 px-6">
          <Carousel items={Data.TestimonialItem} />
        </div>
      </section>

      <section className="md:px-28 px-6 md:py-5">
        <div className="text-center md:text-5xl text-3xl font-bold text-[#f0835b]">
          <h2>Why Choose Us !</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-10 mt-5">
          {Data.SupportItem.map((items) => (
            <div key={items.id} className="grid md:grid-cols-[30%_70%] grid-cols-[30%_70%] border 
              border-gray-400 rounded-xl py-2 ">
              <div className="flex justify-center">
                <Image
                  src={items.image}
                  alt="Support-image"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold">{items.description}</h4>
                <p className="text-gray-700">{items.subdescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>






    </>
  );
}