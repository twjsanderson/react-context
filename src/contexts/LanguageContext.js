import React from 'react';

// have to use capitalized word so react knows its a component not vanilla html
const Context = React.createContext('english');   // this creates a context object, with a default value 'english'

export class LanguageStore extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    }; 

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;