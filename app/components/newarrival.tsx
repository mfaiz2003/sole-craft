import Data from "@/app/data/solecraft.json";
import Image from "next/image";
import Button from "./button";

export default function NewArrival() {
    return (
        <section className="container md:py-15 py-10 md:px-28 px-6 bg-[#FF6820]">
            <div className="grid md:grid-cols-2 grid-cols-1 md:h-110 w-full border border-white
                rounded-3xl">
                <div className="w-full flex flex-col justify-center md:pl-10 pl-5 md:mt-0 mt-5">
                    <h2 className="md:text-7xl text-3xl font-bold text-white">
                        {Data.NewArrivalBanner.heading}
                    </h2>
                    {Data.NewArrivalBanner.description.map((line, index) => (
                        <p key={index} className="md:text-xl text-sm text-white">{line}</p>
                    ))}
                    <div>
                        <Button className="md:mt-15 mt-3 text-black bg-amber-300 hover:rounded-2xl" />
                    </div>
                </div>
                <div className="md:mt-0 mt-5 relative flex item-center rounded-r-3xl
                min-h-[200px] md:min-h-full">
                    <Image src={Data.NikeItem.image3} alt="arrival-image"
                        fill
                        className="object-contain" />
                </div>
            </div>
        </section>

    )
}