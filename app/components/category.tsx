import Data from "@/app/data/solecraft.json";
import Image from "next/image";

type CategoryProps = {
  className?: string;
};

export default function Category({ className }: CategoryProps) {
  return (
    <section className="container md:py-15 py-10 md:px-10 px-6">
      <div className="border border-gray-400 rounded-3xl md:py-10 py-5 md:px-10 px-5">
        <div className="flex flex-col md:text-center">
          <h3 className="md:text-5xl text-3xl font-bold text-stone-700">Our Product's Category</h3>
          <p className="md:mt-6 mt-3 md:text-lg text-sm text-gray-700">“From design to delivery, every product reflects our commitment to quality.</p>
          <p className="md:text-lg text-sm text-gray-700">durability, and customer satisfaction—because you deserve products that truly fit your lifestyle.”</p>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-1 gap-6 mt-10 items-center w-full">
          {Data.CategoryItem.map((items) => (
            <div key={items.id} className="w-full relative md:h-76 h-40 hover:scale-105 shadow-xl rounded-full">
              <Image src={items.image} alt="category-image"
                fill
                unoptimized
                className="object-cover w-full md:h-60 h-40 relative md:rounded-full rounded-xl"
              />
              <h3 className="absolute inset-0 z-10 flex items-center justify-center
                md:text-4xl text-2xl font-semibold text-white text-center">{items.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
