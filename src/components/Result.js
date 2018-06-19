import React, { Component } from 'react';
import Results from './Results';
import styled from 'styled-components'

const EachResult = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    img {
        width: 150px;
    }
`

class Result extends Component {
    render() {
        const results = this.props.results
        return (
            <EachResult>
                {results.map((movie, i) => {
                    return (
                        <Results
                            key={i}
                            name={movie.name}
                            image={movie.image}
                        />
                    )
                })}
            </EachResult>
        );
    }
}

export default Result;