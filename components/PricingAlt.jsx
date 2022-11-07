


const PricingAlt = () => {
    return ( <div>
       
<main className="max-w-6xl px-8 pt-10 mx-auto pb-36">
  
  <div className="mx-auto text-center mb-14">
  <h1 className="mb-8 text-5xl font-semibold tracking-tighter lg:text-7xl text-slate-700">
            Plans and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 backgroundAnimate">
            Pricing
          </span>
        </h1>    <p className="text-xl font-medium text-gray-500">Choose a plan that works best for you and your team.</p>
  </div>
  
  <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
    
    <div className="flex-1 order-2 w-full p-8 mt-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
      <div className="flex items-center border-b border-gray-300 mb-7 pb-7">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"  alt="" className="w-20 h-20 rounded-3xl" />
        <div className="ml-5">
          <span className="block text-2xl font-semibold">Basic</span>
          <span><span className="text-xl font-medium text-gray-500 align-top">$&thinsp;</span><span className="text-3xl font-bold">10 </span></span><span className="font-medium text-gray-500">/ user</span>
        </div>
      </div>
      <ul className="font-medium text-gray-500 mb-7">
        <li className="flex mb-2 text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Get started with <span className="text-black">messaging</span></span>
        </li>
        <li className="flex mb-2 text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Flexible <span className="text-black">team meetings</span></span>
        </li>
        <li className="flex text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3"><span className="text-black">5 TB</span> cloud storage</span>
        </li>
      </ul>
      {/* 
      <a href="#/" className="flex items-center justify-center px-4 py-5 text-xl text-center text-white bg-indigo-600 rounded-xl">
        Choose Plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
      </a>
      */}
    </div>
    
    <div className="flex-1 order-1 w-full p-8 text-gray-400 bg-gray-900 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-2 lg:mt-0">
      <div className="flex items-center pb-8 mb-8 border-b border-gray-600">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"  alt="" className="w-20 h-20 rounded-3xl" />
        <div className="ml-5">
          <span className="block text-3xl font-semibold text-white">Startup</span>
          <span><span className="text-xl font-medium align-top">$&thinsp;</span><span className="text-3xl font-bold text-white">24 </span></span><span className="font-medium">/ user</span>
        </div>
      </div>
      <ul className="mb-10 text-xl font-medium">
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span className="ml-3">All features in <span className="text-white">Basic</span></span>
        </li>
        <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span className="ml-3">Flexible <span className="text-white">call scheduling</span></span>
        </li>
        <li className="flex">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
          <span className="ml-3"><span className="text-white">15 TB</span> cloud storage</span>
        </li>
      </ul>
     {/* 
      <a href="#/" className="flex items-center justify-center px-4 py-5 text-xl text-center text-white bg-indigo-600 rounded-xl">
        Choose Plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
      </a>
      */}
    </div>
    
    <div className="flex-1 order-3 w-full p-8 mt-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
      <div className="flex items-center border-b border-gray-300 mb-7 pb-7">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"  alt="" className="w-20 h-20 rounded-3xl" />
        <div className="ml-5">
          <span className="block text-2xl font-semibold">Enterprise</span>
          <span><span className="text-xl font-medium text-gray-500 align-top">$&thinsp;</span><span className="text-3xl font-bold">35 </span></span><span className="font-medium text-gray-500">/ user</span>
        </div>
      </div>
      <ul className="font-medium text-gray-500 mb-7">
        <li className="flex mb-2 text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">All features in <span className="text-black">Startup</span></span>
        </li>
        <li className="flex mb-2 text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Growth <span className="text-black">oriented</span></span>
        </li>
        <li className="flex text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3"><span className="text-black">Unlimited</span> cloud storage</span>
        </li>
      </ul>
      {/* 
      <a href="#/" className="flex items-center justify-center px-4 py-5 text-xl text-center text-white bg-indigo-600 rounded-xl">
        Choose Plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
      </a>
      */}
    </div>
    
  </div>
  
</main>
    </div> );
}
 
export default PricingAlt;