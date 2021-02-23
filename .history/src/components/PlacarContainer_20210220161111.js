import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0
        };
    }

    marcarGolCasa() {
        console.log(this);
        this.setState({
            gols_casa: this.state.gols_casa + 1
        });
    }

    marcarGolVisitante() {
        console.log(this);
        this.setState({
            gols_visitante: this.state.gols_visitante + 1
        });
    }

    render() {
        return (
            <div>
                <div style={{ float: "left", "marginRight": "10px" }}>
                    <h3>Casa</h3>
                    <Time nome={this.props.casa.nome} 
                          gols={0}
                          marcarGol={this.marcarGolCasa} />
                </div>
                <div style={{ float: "left", "marginRight": "10px" }}>
                    <Partida estadio={this.props.partida.estadio}
                             data={this.props.partida.data}
                             horario={this.props.partida.horario} />
                </div>
                <div style={{ float: "left", "marginRight": "10px" }}>
                    <h3>Visitante</h3>
                    <Time nome={this.props.visitante.nome} 
                          gols={0} 
                          marcarGol={this.marcarGolVisitante} />
                </div>

                <div style={{ clear: "both" }}></div>
            </div>
        );
    }
}