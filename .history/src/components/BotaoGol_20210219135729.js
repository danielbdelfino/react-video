import React from 'react';
import Time from './Time';
import BotaoGol from './BotaoGol';

export default class BotaoGol extends React.Component {
    render() {
        return (
            <div>
               <h1>Vasco</h1> 
               <h2>0</h2>
               <BotaoGol />
            </div>
        );
    }
}