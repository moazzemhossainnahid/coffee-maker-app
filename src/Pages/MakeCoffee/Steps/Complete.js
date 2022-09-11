import React from 'react';
import { useStepperContext } from '../../../Hooks/StepperContext';

import Image from '../../../Images/coffee-logo.png';

const Complete = () => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log(userData);

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">

        <div className="-mt-20">
          <img className='object-cover p-5 mx-auto w-full h-72' src={Image} alt="" />
        </div>

        <div className="mt-3 text-2xl md:text-5xl font-bold uppercase text-rose-600">
        Your Coffee is Ready
        </div>
        {/* <div className="text-lg font-semibold text-gray-500">
          Your Coffee is Ready.
        </div> */}
        <div className="mt-10">
          <button className="h-10 px-5 text-white bg-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-orange-500 hover:text-green-100">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Complete;