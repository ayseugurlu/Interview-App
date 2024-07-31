import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../helper/data"
import QuestionCard from "../components/QuestionCard";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const ITFundamental = () => {

  const [disabled, setDisabled] = useState(true);
  const [index, setIndex] = useState(0);
  const [showAnswer,setShowAnswer]=useState(false)


  const handleCard = () => {
    setDisabled(!disabled);
  };

  const handleNext = (veri) => {
    
    setIndex(index + 1);
    handleCard()
  };
  const handlePrevious = () => {
    if(index>=0){
    setIndex(index - 1);}
    handleCard()
  };

  
  
  return (
    <div className="container d-flex-column justify-content-center align-items-center">
      
      {data.filter((item)=> item.topic==="IT-Fundamental").map((veri)=>(
        <div key={veri.id}>
        <QuestionCard  veri={veri} disabled={disabled} setShowAnswer={setShowAnswer} showAnswer={showAnswer} />
        <div className="d-flex justify-content-end mx-5 my-3">
            <button
              className="btn btn-outline-success"
              onClick={(e) => handlePrevious(e)}
            >
              <GrLinkPrevious />
            </button>
            <button
              className="btn btn-outline-success"
              onClick={(e) => handleNext(e)}
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      ))}


       
      

     
    </div>
  );
};

export default ITFundamental;
