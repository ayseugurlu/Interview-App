import React from "react";

import { FaCircleArrowDown } from "react-icons/fa6";

const QuestionCard = ({ veri, disabled ,setShowAnswer,showAnswer }) => {
  

  console.log(veri);
  const { id, question, answer, topic } = veri;

 
  return (
    <div>
      {disabled && (<div>
        <div key={id} className="card">
          <div className="card-header text-danger">{topic}</div>

          <div className="card-body">
            <div className="d-flex justify-content-between">
                 <h5 className="card-title">{question}</h5>
            <FaCircleArrowDown onClick={()=>setShowAnswer(!showAnswer)} className="text-success display-5"/>
            </div>
           {showAnswer && (<div>
              <p className="card-text">{answer}</p>
            </div>)}
            
          </div>
         
        </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
