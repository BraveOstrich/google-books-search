import React from "react";

Render(){
    return(
        <div className="card">
            <div className="card-header">
                Book Search
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Book Search</label>
                        <input type="text" className="form-control" id="formInput1" placeholder="Search for Your Favorite Books Here" />
                    </div>
                    <button type="button" className="btn btn-secondary btn-sm">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;