import React from 'react';
export const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        name: "None Selected",
        tag: String,
        flag: "images/flags/ULM",
        bonuses: Array
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}