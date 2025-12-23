type GenderProps = {
  className?: string; 
};

export default function Gender({ className }: GenderProps) {
  return (
    <div className={`gap-6 md:mt-10 mt-5 text-gray-500 ${className}`}>
      <button className="md:px-10 px-5 md:py-3 py-1 rounded-lg bg-black border-2 border-gray-300">Men</button>
      <button className="md:px-10 px-5 md:py-3 py-1 rounded-lg border-2 border-gray-300">Women</button>
      <button className="md:px-10 px-5 md:py-3 py-1 rounded-lg border-2 border-gray-300">Boy</button>
    </div>
  );
}
