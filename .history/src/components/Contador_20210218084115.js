import React from 'react';

export default class Contador extends React.Component {
    constructor() {
        super();

        this.state = {
            contador: 0,
        };
    }

    render() {
        return (
            <div>
                <h1>this.state.contador</h1>
                <div>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        );
    }
}