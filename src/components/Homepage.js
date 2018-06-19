import React, { Component } from 'react';
import Search from './Search';

class Homepage extends Component {
    

    render() {
        return (
            <div>
                <h1>TVMaze React</h1>
                <Search/>
            </div>
        );
    }
}

export default Homepage;