import React from 'react';

export default class BotaoGol extends React.Component {
    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Gol!</button>
        );
    }
}