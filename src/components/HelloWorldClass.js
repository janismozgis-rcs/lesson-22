import React from 'react';

class HelloWorldClass extends React.Component {
    handleButtonClick() {
        alert('Called from named function handleButtonClikc()');
    }

    render() {
        return (
            <div>
                <h1>Hello world form Class component</h1>
                <h2>Hello, {this.props.name}</h2>
                <button onClick={() => { alert('Called from anonymous function') }}>Click me!</button>
                <button onClick={this.handleButtonClick}>Click me 2</button>
            </div>
        )
    }
}

export default HelloWorldClass;