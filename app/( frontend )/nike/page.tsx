"use client";

import Data from "@/app/data/solecraft.json";
import Image from "next/image";
import { Header } from "@/app/components";
import { useState } from "react";

export default function Nike() {
  const [activeImage, setActiveImage] = useState(
    Data.ProductImage[0].image
  );
  return (

    <>

      {/* Banner section */}

      <section className="container">
        <div className="bg-black">
          <Header />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:h-[50vh] h-[50vh] bg-black md:py-0 py-15">
          <div className="relative overflow-hidden">
            <Image src={Data.NikeItem.image2}
              alt="Banner-Image2"
              fill
              unoptimized
              className="object-contain" />
          </div>
          <div className="relative flex items-center justify-center text-white md:text-[200px] 
              text-9xl font-bold italic">
            <h1>Nike</h1>
          </div>
        </div>
      </section>

      {/* brand section */}

      <section className="md:py-15 py-10 md:px-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-6">
            <div className="flex justify-center md:justify-start">
              <div className="flex md:flex-col gap-4 py-6 px-2 rounded-md max-w-full">
                {Data.ProductImage.map((items) => (
                  <button key={items.id} onClick={() => setActiveImage(items.image)}
                    className={`relative aspect-square w-20 md:w-24 rounded-md overflow-hidden border transition
                        ${activeImage === items.image ? "border-black" : "border-gray-300 hover:border-gray-500"}`}>
                    <Image
                      src={items.image}
                      alt="product-thumbnail"
                      fill
                      unoptimized
                      className="object-contain" />
                  </button>
                ))}
              </div>
            </div>
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
              <Image
                src={activeImage}
                alt="product-image"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="md:px-6 py-6 rounded-4xl bg-gray-100">
              <h1 className="md:text-3xl text-2xl font-bold">Air Jordan Dunk High</h1>
              <p className="text-gray-600 mt-3">
                Premium leather upper with classic Jordan comfort and iconic street style.
              </p>
              <div className="flex gap-3 mt-6 flex-wrap">
                {[6, 7, 8, 9, 10].map((size) => (
                  <button key={size} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-black
                   hover:text-white transition">{size}
                  </button>
                ))}
              </div>
              <button className="mt-8 w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Review section */}

      <section>
        <div></div>
      </section>

    </>
  );
}