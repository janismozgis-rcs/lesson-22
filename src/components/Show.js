import { useState } from 'react';

// function Show() {
//     const [shouldShowParagraph, setShouldShowParagraph] = useState(false);

//     const paragraphStyle = {display: 'none'};
//     if (shouldShowParagraph) {
//         paragraphStyle.display = 'block';
//     }

//     const toggleShowparagraph = () => {
//         setShouldShowParagraph(!shouldShowParagraph);
//     }
    
//     return (
//         <div>
//             <button onClick={toggleShowparagraph}>Click me to show paragraph!</button>
//             <p style={paragraphStyle}>Some nice paragraph.</p>
//         </div>
//     )
// }


function Show() {
    const [shouldShowParagraph, setShouldShowParagraph] = useState(false);

    const toggleShowparagraph = () => {
        setShouldShowParagraph(!shouldShowParagraph);
    }
    let paragraph = null;

    if (shouldShowParagraph) {
        paragraph = <p>Some nice paragraph.</p>
    }
    
    return (
        <div>
            <button onClick={toggleShowparagraph}>Click me to show paragraph!</button>
            {paragraph}
        </div>
    )
}

export default Show;