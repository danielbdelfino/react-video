import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {

    constructor() {

    }
    render() {
        return (
            <div>
                <div style={{ float: "left", "marginRight": "10px" }}>
                    <h3>Casa</h3>
                    <Time nome={this.props.casa.nome} gols={0} />
                </div>
                <div style={{ float: "left", "marginRight": "10px" }}>
                    <Partida estadio={this.props.partida.estadio}
                        data={this.props.partida.data}
                        horario={this.props.partida.horario} />
                </div>
                <div style={{ float: "left", "marginRight": "10px" }}>
                    <h3>Visitante</h3>
                    <Time nome={this.props.visitante.nome} gols={0} />
                </div>

                <div style={{ clear: "both" }}></div>
            </div>
        );
    }
}