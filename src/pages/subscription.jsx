import React from "react";

const Subscription = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen p-8 ">
      <div className="items-center flex flex-col mb-6">
        <p className=" text-4xl font-bold text-[#191919] mb-4 text-center">
          Subscription Plans
        </p>
        <p className="text-lg text-[#606F7B] text-center max-w-md">
          Choose the best plan for your business
        </p>
      </div>
      <div className="w-[30%] justify-center items-center flex flex-col p-3 md:flex-row  ">
        <div className="rounded-sm px-16 py-2 bg-[#EDFAF2] justify-center items-center flex flex-col ">
          <p className="font-semibold font-roboto text-[#257F4B] text-2xl mb-2 items-center flex">
            Freemium
          </p>
          <p className="flex text-center items-center text-[#3D4852]">
            Flexible pricing without monthly fees
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center pt-4 mb-6">
          <p className="text-3xl font-bold">
            $0<span className="text-base font-normal">/mo</span>
          </p>
          <div className="flex flex-col text-center gap-2 text-sm">
           <p className="text-[#606F7B]"> 0% fee per transaction limited pages</p>
             <p className="text-[#606F7B]"> limited number of poems </p>
             <p className="text-[#606F7B]">Email notificatons</p>
             <p className="text-[#606F7B]"> Weekly reports No Customization Options</p>
            <p className="text-[#606F7B]">No Ranking Preference</p>
          </div>
          <button className="bg-slate-100 border border-[#044AB1] text-[#044AB1] px-24 py-2 rounded-3xl hover:bg-slate-900 flex items-center">
            Subscribe
          </button>
        </div>

        
        <div className="w-[30%] justify-center items-center flex flex-col p-3 ">
            <div className="rounded-sm px-16 py-2 bg-[#FFF0E2] justify-center items-center flex flex-col ">
                <p className="font-semibold font-roboto text-[#DF6C03] text-2xl mb-2 items-center flex">
                  Premium
                </p>
                <p className="flex text-center items-center text-[#3D4852]">
                  Monthly pricing without monthly fees
                </p>
            </div>
        <div className="flex flex-col gap-6 items-center pt-4 mb-6">
            <p className="text-3xl font-bold">
              $5<span className="text-base font-normal">/mo</span>
            </p>
          <div className="flex flex-col text-center gap-2 text-sm">
             <p className="text-[#606F7B]"> 2% fee per transaction limited pages</p>
             <p className="text-[#606F7B]"> limited number of poems </p>
             <p className="text-[#606F7B]">Email notificatons</p>
             <p className="text-[#606F7B]"> Weekly reports No Customization Options</p>
            <p className="text-[#606F7B]">No Ranking Preference</p>
          </div>
          <button className="bg-slate-100 border border-[#044AB1] text-[#044AB1] px-24 py-2 rounded-3xl hover:bg-slate-900 flex items-center">
            Subscribe
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Subscription;
