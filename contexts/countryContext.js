import React from 'react';
import {modifierVals} from '../utils/modifierData'
export const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        name: "None Selected",
        tag: String,
        flag: "images/flags/ULM",
        modifiers: modifierVals
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}