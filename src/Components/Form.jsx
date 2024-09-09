import React from "react";
import { useState } from "react";

const Form = () => {
  const [activeSection, setActiveSection] = useState("tenure");
  return (
    <>
      <div className="container w-full min-h-screen">
        <div className="box border-zinc-400 border-[1px] min-h-screen ml-36 mt-10">
          <div className="button w-full h-12 border-[1px]">
            <span>
              <button
                onClick={() => setActiveSection("tenure")}
                className={`capitalize text-2xl px-5 py-2 text-zinc-600 ${
                  activeSection === "tenure"
                    ? "bg-purple-600 text-zinc-200"
                    : ""
                }`}
              >
                Investment tenure
              </button>
            </span>
            <span>
              <button
                onClick={() => setActiveSection("amount")}
                className={`capitalize text-2xl px-5 py-2 text-zinc-600 ${
                  activeSection === "amount"
                    ? "bg-purple-600 text-zinc-200"
                    : ""
                }`}
              >
                Investment amount
              </button>
            </span>
          </div>
          {activeSection === "amount" && (
            <div className="border-[1px] border-zinc-400 min-h-screen m-6">
              <div className="button w-full h-12 border-[1px]">
                <span>
                  <button className="capitalize text-l px-5 py-2 text-zinc-600">
                    Rs 1000
                  </button>
                </span>
                <span>
                  <button className="capitalize text-l px-5 py-2 text-zinc-600">
                    Rs 10000
                  </button>
                </span>
                <span>
                  <button className="capitalize text-l px-5 py-2 text-zinc-600">
                    Rs 50000
                  </button>
                </span>
                <span>
                  <button className="capitalize text-l px-5 py-2 text-zinc-600">
                    Rs 100000
                  </button>
                </span>
                <span>
                  <button className="capitalize text-l px-5 py-2 text-zinc-600">
                    More than rs 100000
                  </button>
                </span>
              </div>
            </div>
          )}

          {activeSection === "tenure" && (
            <div className="border-[1px] border-zinc-400 min-h-screen m-6">
              <div className="button w-full h-12 border-[1px]">
                <span>
                  <button className="capitalize text-l px-5 py-2 text-zinc-600">
                    3 months
                  </button>
                </span>
                <span>
                  <button className="capitalize text-l px-5 py-2 text-zinc-600">
                    6 months
                  </button>
                </span>
                <span>
                  <button className="capitalize text-l px-5 py-2 text-zinc-600">
                    1 year
                  </button>
                </span>
                <span>
                  <button className="capitalize text-l px-5 py-2 text-zinc-600">
                    More than 1 year
                  </button>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
