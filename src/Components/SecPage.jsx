import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";

const secPage = () => {
  return (
    <>
      <div
        className="w-full flex items-center justify-center"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        <h1 className="capitalize text-5xl text-center p-5 mt-10 border-b-4 border-purple-600 inline-block">
          Why choose us
        </h1>
      </div>
      <div className="box flex items-center -mt-52 justify-center w-full min-h-screen">
        <div className="flex gap-10">
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaRegSquareCheck />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              High returns
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1 className="text-center">Our Investment Options Offer Potential</h1>
              <h1 className="text-center">Returns Of Up To 30%.</h1>
            </div>
          </div>
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaRegClock />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              Flexible duration
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1 >You Have The Flexibility To Invest For As Short</h1>
              <h1 className="text-center">As 1 Month.</h1>
            </div>
          </div>
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaChartPie />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              Diversified Portfolio
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1>Discover A Spectrum Of Asset Classes To</h1>
              <h1 className="text-center">Optimize Returns And Minimize Risks.</h1>
            </div>
          </div>
        </div>
      </div>

{/* Our Assets start from here.... */}

      <div style={{ fontFamily: "'Nunito', sans-serif" }} className="w-full flex items-center justify-center -mt-52">
        <h1 className="text-5xl border-b-4 border-purple-600 inline-block">Our Asset Classes</h1>
      </div>
      <div className=" w-full min-h-screen">
      <div className="box flex items-center justify-center">
        <div className="flex gap-10">
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaRegSquareCheck />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              High returns
            </div>
            <div className="text-zinc-500 tracking-tight ">
              <h1 className="text-center">Our Investment Options Offer Potential</h1>
              <h1 className="text-center">Returns Of Up To 30%.</h1>
              <button className="capitalize ml-16 mt-2 rounded-2xl bg-zinc-500 text-white py-2 px-5">Know more</button>
            </div>
          </div>
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaRegClock />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              Flexible duration
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1 >You Have The Flexibility To Invest For As Short</h1>
              <h1 className="text-center">As 1 Month.</h1>
              <button className="capitalize ml-24 mt-2 rounded-2xl bg-zinc-500 text-white py-2 px-5">Know more</button>
            </div>
          </div>
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaChartPie />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              Diversified Portfolio
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1>Discover A Spectrum Of Asset Classes To</h1>
              <h1 className="text-center">Optimize Returns And Minimize Risks.</h1>
              <button className="capitalize ml-16 mt-2 rounded-2xl bg-zinc-500 text-white py-2 px-5">Know more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="box flex items-center justify-center">
        <div className="flex gap-10">
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaRegSquareCheck />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              High returns
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1 className="text-center">Our Investment Options Offer Potential</h1>
              <h1 className="text-center">Returns Of Up To 30%.</h1>
              <button className="capitalize ml-16 mt-2 rounded-2xl bg-zinc-500 text-white py-2 px-5">Know more</button>
            </div>
          </div>
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaRegClock />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              Flexible duration
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1 >You Have The Flexibility To Invest For As Short</h1>
              <h1 className="text-center">As 1 Month.</h1>
              <button className="capitalize ml-24 mt-2 rounded-2xl bg-zinc-500 text-white py-2 px-5">Know more</button>
            </div>
          </div>
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaChartPie />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              Diversified Portfolio
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1>Discover A Spectrum Of Asset Classes To</h1>
              <h1 className="text-center">Optimize Returns And Minimize Risks.</h1>
              <button className="capitalize ml-20 mt-2 rounded-2xl bg-zinc-500 text-white py-2 px-5">Know more</button>
            </div>
          </div>
        </div>
        
      </div>
      <div className="box flex items-center justify-center">
        <div className="flex gap-10">
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaRegSquareCheck />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              High returns
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1 className="text-center">Our Investment Options Offer Potential</h1>
              <h1 className="text-center">Returns Of Up To 30%.</h1>
              <button className="capitalize ml-16 mt-2 rounded-2xl bg-zinc-500 text-white py-2 px-5">Know more</button>
            </div>
          </div>
          <div className="h-80 w-80 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-purple-600">
              <span className="text-white text-4xl flex items-center justify-center mt-7 font-bold">
                <FaRegClock />
              </span>
            </div>
            <div className="font-semibold capitalize mt-5 text-2xl">
              Flexible duration
            </div>
            <div className="text-zinc-500 tracking-tight">
              <h1 >You Have The Flexibility To Invest For As Short</h1>
              <h1 className="text-center">As 1 Month.</h1>
              <button className="capitalize ml-24 mt-2 rounded-2xl bg-zinc-500 text-white py-2 px-5">Know more</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default secPage;
