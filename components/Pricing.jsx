const Pricing = () => {
    return (
            <div className="flex flex-col items-center h-screen mx-auto w-[90%]  ">
                
                <h1 className="text-6xl font-semibold tracking-tighter text-center md:text-7xl lg:text-8xl text-slate-700">
            Plans and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 backgroundAnimate">
            Pricing
          </span>
        </h1>
        
        <div className="z-0 flex justify-center w-full h-screen p-8 m-auto gap-x-8 " >
      <div className="w-[300px] h-[300px] bg-indigo-400/80 rounded-2xl flex flex-col items-center p-8 space-y-28 shadow-2xl drop-shadow-xl nmConcave cursor-pointer">
            <h1 className="text-2xl font-bold tracking-tighter text-slate-700">Landing</h1>
            <h1 className="text-6xl font-bold tracking-tighter text-indigo-400">$1K</h1>
        </div>
       
        <div className="w-[500px] h-[500px] bg-indigo-500/80 rounded-2xl flex flex-col items-center p-8 shadow-2xl drop-shadow-xl nmConcave space-y-40 cursor-pointer">
            <h1 className="text-4xl font-bold tracking-tighter text-indigo-400">Business</h1>
            <h1 className="text-6xl font-bold tracking-tighter text-slate-700">$2K</h1>
        </div>
       
            
    </div> 
    </div>
    );
}
 
export default Pricing;<div>
</div>