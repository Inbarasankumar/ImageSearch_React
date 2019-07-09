import React from 'react';


class SearchBar extends React.Component
{

    state={term:''};
    //uncontrolled element
//    onInputChange(event)
//    {
//         console.log(event.target.value);
//    }
   onFormSubmit=(e)=>
   {
       e.preventDefault();
       this.props.onSubmit(this.state.term);
   }
    render()
    {
        return(
            <div className="ui segment">
                <form onSubmit={(e)=>this.onFormSubmit(e)} className="ui form">
                <div className="field">
                <label>Image Search</label>
                {/* Uncontrolled element <input type="text" onChange={this.onInputChange}></input> */}
                <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}></input>
                </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;