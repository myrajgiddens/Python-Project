import React, { Component } from "react";
import { Button} from 'antd';



import "./search.css";

class Search extends Component {
state = {
    searchValue: "",
    stocks: []
};
handleOnChange = event => {
    this.setState({ searchValue: event.target.value});
};

handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
};

makeApiCall = searchInput => {
    //which url do i use here??
    var searchUrl = `https://paper-api.alpaca.markets{searchInput}`;
    fetch(searchUrl)
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        this.setState({ stocks: jsonData.stocks });
    });
};

render() {
return (
    <div id="main">
        <h1>Paper Trading Starts Now!</h1>
        <input 
        name="text" 
        type="text" 
        placeholder="Search" 
        onChange={event => this.handleOnChange(event)}
        value={this.state.searchValue}
        />
        <Button type="primary" onClick={this.handleSearch}>Search</Button>
        {this.state.stocks ? (
            <div id="stocks-container">
                {this.state.stocks.map((stock, index) =>(
                    <div class="single-stock" key="{index}">
                        <h2>{stock.strStock}</h2>
                    
                    </div>
                ))}
            </div>   
        ) : (
            <p>Search for a Stock Here!</p>
        )}
    </div>
);
}
}

export default Search;