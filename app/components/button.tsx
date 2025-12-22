type ButtonProps = {
  className?: string; 
};

export default function Button({ className }: ButtonProps) {
  return (
    <button
      className={`bg-black md:px-6 md:py-4 px-2 py-2 md:text-lg text-sm md:rounded-xl rounded-lg hover:scale-110
        hover:transition-transform duration-500 hover:shadow-2xl ${className}`}
    >
      Shop Now
    </button>
  );
}
