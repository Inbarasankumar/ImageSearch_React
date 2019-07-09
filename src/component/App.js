import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component
{
    state ={images:[]};
    onSearchSubmit= async (e)=>
    {
    const response= await axios.get('https://api.unsplash.com/search/photos',{
           
            params:{
                client_id:'c02eb26e18b659c5edec9a1bc62425c64188ba7b59e05a85257a5beeb40b71c1',
                query: e
            }
        });
        console.log(response.data.results);
        this.setState({images:response.data.results});
    }
    //below method uses promise
    // onSearchSubmit (e)
    // {
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params:{
    //             query: e
    //         },
    //         headers:{
    //             Authorization: 'Clinet_ID c02eb26e18b659c5edec9a1bc62425c64188ba7b59e05a85257a5beeb40b71c1'
    //         }
    //     }).then((res,err)=>{
    //             console.log(err);
    //     });
    // }
    render()
    {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
               <SearchBar onSubmit={this.onSearchSubmit}/>
               <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;