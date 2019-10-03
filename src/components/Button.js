import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // the static keyword allows us to modify the class itself not an instance of the class
    // the below line is like writing Button.contextType = LangaugeContext; after the class declaration
    // static contextType = LanguageContext; // hook up context object with class component

    
    // when we use a consumer we dont need the contextType shown above
    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {(color) => 
                    <button 
                        className={`ui button ${color}`}>
                        {/* The consumer takes a child function and automatically invoke it for us */}
                        <LanguageContext.Consumer>
                            {({ language }) => language === 'english' ? 'Submit' : 'Voorleggen'}
                        </LanguageContext.Consumer>
                        {/* {text} used with this.context */}
                    </button>
                }
            </ColorContext.Consumer>
        );
    }
}

export default Button;