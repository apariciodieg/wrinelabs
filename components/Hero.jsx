import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center h-screen mx-auto  w-[80%] mt-52">
      <div className="text-6xl font-semibold tracking-tighter md:text-7xl lg:text-8xl ">
        <h1 className="text-center text-slate-800">
          All your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 backgroundAnimate">
            Web solutions
          </span>
          , in one single place
        </h1>
      </div>

      <div className="items-center mt-10 text-center">
        <p className="mt-3 text-xl text-gray-500 sm:text-xl sm:mx-auto sm:mt-5 sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
          we are committed to help small businesses and creators reach their
          full potential through technology.
        </p>
      </div>

      
      <div className="flex flex-col items-center mt-10 space-y-4 ">
        <button className="p-2 px-4 rounded-lg text-slate-800 hover:bg-transparent w-96">
          Get started
        </button>
        <button className="p-2 px-4 bg-blue-500 shadow-lg rounded-xl hover:shadow-blue-500/50 w-96 ">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Hero;
