import React, { Component } from 'react'





class Results extends Component {
    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <div><img src={this.props.image} alt=""/></div>
            </div>
        );
    }
}

export default Results;