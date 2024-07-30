import React from "react";
import { Link } from "react-router-dom";
import data from "../helper/data"

const ITFundamental = () => {

  
  
  return (
    <div>
      <div className="card">
        <div className="card-header text-danger">ITF und CT</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <div>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>

      <Link to="/next" className="btn btn-success">
        Weiter
      </Link>
    </div>
  );
};

export default ITFundamental;
