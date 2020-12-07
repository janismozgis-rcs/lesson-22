function HelloWorldFunctional(props) {
    const handleButtonClick = () => {
        alert('Called from named fucntion handleButtonClick()');
    }

    return ()
        <div>
            <h1>Hello world!</h1>
            <h3>Hello, {props.name}</h3>
            <button onClick={() => { alert('Called from anonymous fuction') }}>Click Me</button>
            <button onClick={handleButtonClick}>Click me 2</button>
        </div>
    )
}

export default HelloWorldFunctional;