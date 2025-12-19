export default function ForwardIcon(){
    return(
        <div>
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white"
            className="bg-black hover:bg-red-500 h-8 w-8 rounded-full relative z-10 rotate-320 hover:scale-115 hover:transition-transform duration-500 ">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6-6m6 6l-6 6"
                />
            </svg>
            </a>
        </div>
    );
}