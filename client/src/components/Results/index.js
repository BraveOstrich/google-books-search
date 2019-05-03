import React from "react";

export function Results(props){
    return(
        <div className="container">
            <div className="card">
            <div className="card-header text-left">
                Results
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button type="button" className="btn btn-secondary btn-sm float-right">View</button>
                <button type="button" className="btn btn-secondary btn-sm float-right">Save</button>
            </div>
            </div>
        </div>

    );
}



export default Results;