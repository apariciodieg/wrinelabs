import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon, ServerStackIcon, IdentificationIcon, PaintBrushIcon, CommandLineIcon, MagnifyingGlassIcon, RocketLaunchIcon   } from '@heroicons/react/24/outline'
import { motion, useViewportScroll, useTransform } from "framer-motion";



const features = [
    {
      name: 'Brand Identity',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Web Design',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: PaintBrushIcon,
    },
    {
      name: 'Web development',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: CommandLineIcon,
    },
    {
      name: 'SEO',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: MagnifyingGlassIcon,
    },
    {
      name: 'Deployment',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Hosting',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ServerStackIcon,
    },
  

  
  ]

  


const Features = () => {
  return (

    <div>

      

     


<div className="flex flex-col items-center mx-auto w-[80%]">
  
      <div className="text-6xl font-semibold tracking-tighter md:text-7xl lg:text-8xl ">
        <h1 className="text-center text-slate-700 ">
            How{" "} 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 backgroundAnimate">
        we create{" "}
          </span>
         value for your business
        </h1>
      </div>
      </div>

    <div className="py-12">

      {/*-------------Box---------------- */}

      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
   
        <div className="mt-10">
          <dl className="flex flex-col items-center space-y-10 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="">
                <dt>
                  <div className="flex items-center justify-center w-12 h-12 border-2 rounded-lg text-slate-800">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 text-slate-700">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-700 w-60 sm:max-w-none ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Features;
