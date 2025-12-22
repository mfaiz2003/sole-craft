type ButtonProps = {
  className?: string; 
};

export default function Button({ className }: ButtonProps) {
  return (
    <button
      className={`bg-black px-8 py-4 rounded-lg hover:scale-110 
        hover:transition-transform duration-500 hover:shadow-2xl ${className}`}
    >
      Shop Now
    </button>
  );
}
