import React from "react";
import shopBanner from '../../assets/img/shopBanner.jpg';

const Banner = () => {
  return (
    <div
      className="relative flex items-center justify-start bg-cover bg-center text-left h-svh w-full"
       style={{ backgroundImage: `url(${shopBanner})`}}>
        <div className=" absolute top-0 right-0 bottom-0 left-0"></div>
            <main className="px-10 lg:px-24 z-10">
                <div className="text-left">
                    <h2 className="text-5xl font-semibold text-red-700">Women's Fashion Tops </h2>
                </div>
                <p className="mt-3 text-red-900 font-bold sm:mt-5 sm:max-w-xl text-8xl">
                    Hot Days Ahead
                     Value Combo 
                </p>
                <p className="mt-4 text-rose-900 text-4xl  font-semibold ">
                    Stylish • Vibrant • Comfortable
                </p>
                <div className="flex justify-center items-center h-32">
                    <button className="group bg-red-600 hover:bg-rose-500 border-4 border-gray-200 hover:border-white text-white px-6 py-3 text-md font-semibold rounded-full inline-flex items-center transition-all duration-300">
                        <span>Start Shopping</span>
                        <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"><i className="fa-solid fa-arrow-right"></i></span>
                    </button>
                </div>
            </main>
    </div>
  );
};

export default Banner;
