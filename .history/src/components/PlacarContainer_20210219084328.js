import React from 'react';

export default class PlacarContainer extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Time />
                </div>
                <div>
                    <Partida />
                </div>
                <div>
                    <Time />
                </div>
            </div>
        );
    }
}