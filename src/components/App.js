import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';


class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    {/* Pass the state to the context Provider, which passes it to children for use, the Provider is a Component */}
                    {/* We dont have to make use of the state system when using context */}
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

// Every time you create a new Provider it creates a new pipeline

export default App;