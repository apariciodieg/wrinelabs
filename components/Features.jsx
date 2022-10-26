import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

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
      icon: ScaleIcon,
    },
    {
      name: 'Web development',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: BoltIcon,
    },
    {
      name: 'SEO',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'Deployment',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'Hosting',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
  

  
  ]

  


const Features = () => {
  return (

    <div>

<div className="flex flex-col items-center mx-auto w-[80%]">
      <div className="text-6xl font-semibold tracking-tighter md:text-7xl lg:text-8xl ">
        <h1 className="text-center text-slate-200 ">
            How{" "} 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
        we create{" "}
          </span>
         value for your business
        </h1>
      </div>
      </div>

    <div className="py-12">

      {/*-------------Box---------------- */}

      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 radialPurple ">
   
        <div className="mt-10">
          <dl className="flex flex-col items-center space-y-10 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white border-[1px] rounded-lg">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-slate-300">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 w-60 sm:max-w-none ">{feature.description}</dd>
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