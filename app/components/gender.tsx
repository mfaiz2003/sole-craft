type GenderProps = {
  className?: string; 
};

export default function Gender({ className }: GenderProps) {
  return (
    <div className={`gap-6 mt-10 text-gray-500 ${className}`}>
      <button className="px-10 py-3 bg-black border-2 border-gray-300">Men</button>
      <button className="px-10 py-3 border-2 border-gray-300">Women</button>
      <button className="px-10 py-3 border-2 border-gray-300">Boy</button>
    </div>
  );
}
