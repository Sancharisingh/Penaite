import React, { useState } from 'react';
import { questions } from '../api'; 
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


const Accordion = () => {
  const [expandedId, setExpandedId] = useState(null);

  // Toggle function to handle which item is expanded
  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <section className='main-div overflow-hidden'>
        <h1 className='text-5xl p-20 text-center' style={{ fontFamily: 'Nunito' }}>Frequently Asked Questions</h1>
        <div className='w-3/5 ml-60'>
          {questions.map((currEle) => {
            const { id, question, answer } = currEle;
            const isExpanded = expandedId === id; // Check if this item is expanded
            return (
              <div key={id} className="border-b-2 border-gray-300 py-4">
                <div className="flex justify-between cursor-pointer " onClick={() => handleToggle(id)}>
                  <p>{question}</p>
                  <p>{isExpanded ? <FaMinus /> : <FaPlus />}</p>
                </div>
                {isExpanded && (
                  <div className="mt-4">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Accordion;
