import { CheckCircleIcon } from '@heroicons/react/24/outline'



const Pricing = () => {
    return (
            <div className="flex flex-col items-center h-screen mx-auto w-[90%] space-y-8  ">
                
                <h1 className="text-6xl font-semibold tracking-tighter text-center md:text-7xl lg:text-8xl text-slate-700">
            Plans and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 backgroundAnimate">
            Pricing
          </span>
        </h1>

        

        
        <div className="z-0 flex justify-center w-full h-screen p-8 m-auto gap-x-8 " >
       
      <div className="w-[300px] h-[400px] z-10 bg-indigo-400/80 rounded-2xl flex flex-col items-center p-8 space-y-28 shadow-2xl drop-shadow-xl nmConcave cursor-pointer">

            <div className="flex flex-col space-y-6 ">
              <span className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold tracking-tighter text-slate-600">Landing</h1>
            <h1 className="text-2xl font-semibold tracking-tighter text-slate-600">$1k</h1>
            </span>
              <div className="flex items-center gap-x-4">
            <CheckCircleIcon className="w-6 text-indigo-400"/>
            <h2 className="text-lg font-medium text-slate-700">Single Landing page</h2>
            </div>
              <div className="flex items-center gap-x-4">
            <CheckCircleIcon className="w-6 text-indigo-400"/>
          <h2 className="text-lg font-medium text-slate-700">Custom domain</h2>
            </div>
              <div className="flex items-center gap-x-4">
            <CheckCircleIcon className="w-6 text-indigo-400"/>
            <h2 className="text-lg font-medium text-slate-700">Hosting</h2>
            </div>
              <div className="flex items-center gap-x-4">
            <CheckCircleIcon className="w-6 text-indigo-400"/>
            <h2 className="text-lg font-medium text-slate-700">SSL Certificate</h2>
            </div>
            </div>
        </div>
     
        </div>

       
        </div>
       
       
            
    );
}
 
export default Pricing;<div>
</div>