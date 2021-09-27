import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(t){
        console.log(t)
        
    }

    render(){
        return (
        <div className="ui container" style={{marginTop: "10px"}}>
            <SearchBar onSub={this.onSearchSubmit}/>
        </div>)
    }
}

export default App;