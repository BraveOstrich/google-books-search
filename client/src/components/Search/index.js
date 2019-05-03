import React from "react";

export function Search(props) {
    return(
        <div className="card">
            <div className="card-header text-left">
                Book Search
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                    <label></label>
                        <input type="text" className="form-control" id="formInput1" placeholder="Search for Your Favorite Books Here" {...props}/>
                    </div>
                    <button type="button" className="btn btn-secondary btn-sm float-right">Search</button>
                </form>
            </div>
        </div>
    );
}


export default Search;