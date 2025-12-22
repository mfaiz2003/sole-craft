type CategoryProps = {
  className?: string; 
};

export default function Category({ className }: CategoryProps) {
  return (
    <div className={`flex gap-6 mt-10 text-gray-500 ${className}`}>
      <button className="px-10 py-3 bg-black border-2 border-gray-300">Footwear</button>
      <button className="px-10 py-3 border-2 border-gray-300">Sandals</button>
      <button className="px-10 py-3 border-2 border-gray-300">Flip-Flops</button>
    </div>
  );
}
