import React from "react";

import { FaCircleArrowDown } from "react-icons/fa6";

const QuestionCard = ({ veri, disabled ,setShowAnswer,showAnswer }) => {
  

  console.log(veri);
  const { id, question, answer, topic } = veri;

 
  return (
    <div>
      {disabled && (<div>
        <div key={id} className="card">
          <div className="card-header text-danger bg-secondary-subtle">{topic}</div>

          <div className="card-body">
            <div className="d-flex justify-content-between gap-4">
                 <h5 className="card-title bg-warning-subtle rounded-5 w-75  p-3">{question}</h5>
            <FaCircleArrowDown onClick={()=>setShowAnswer(!showAnswer)} className="text-success display-5 w-25"/>
            </div>
           {showAnswer && (<div>
              <p className="card-text bg-success-subtle p-3 ">{answer}</p>
            </div>)}
            
          </div>
         
        </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
