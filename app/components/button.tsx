export default function Button({ className }){
    return(
        <button className={`bg-black pl-8 pr-8 pt-4 pb-4 rounded-lg hover:scale-110 
            hover:transition-transform duration-500 hover:shadow-2xl ${className}`}>Shop Now</button>
    );
}