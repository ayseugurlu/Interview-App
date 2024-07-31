import React, { useState } from "react";
import data from "../helper/data";
import QuestionCard from "../components/QuestionCard";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const ITFundamental = () => {
  const [disabled, setDisabled] = useState(true);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);



  const handleNext = (veri) => {
    if (
      index <
      data.filter((item) => item.topic === "IT-Fundamental").length - 1
    ) {
      setIndex(index + 1);
      setDisabled(true);
      setShowAnswer(false);
    }
  };
  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    setDisabled(true);
    setShowAnswer(false);
  };

  const filteredData = data.filter((item) => item.topic === "IT-Fundamental");
  const currentVeri = filteredData[index];

  return (
    <div className="container d-flex-column justify-content-center align-items-center">
      {currentVeri && (
        <div>
          <QuestionCard
            veri={currentVeri}
            disabled={disabled}
            setShowAnswer={setShowAnswer}
            showAnswer={showAnswer}
          />
          <div className="d-flex justify-content-end mx-1 my-3">
            <button
              className="btn btn-outline-success"
              onClick={handlePrevious}
              disabled={index === 0}
            >
              <GrLinkPrevious />
            </button>
            <button
              className="btn btn-outline-success mx-3"
              onClick={handleNext}
              disabled={index === filteredData.length - 1}
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ITFundamental;
