// import { useState } from 'react';

// function Changer() {
//     const [someText, setSomeText] = useState(1);

//     const changeText = () => {
//         if (someText == 1) {
//             setSomeText(2);
//         } else {
//             setSomeText(1);
//         }
//     }

//     let title = <h2>Foo</h2>
//     if (someText == 2) {
//         title = <h2><del>Bar</del></h2>
//     }

//     return (
//         <div>
//             {title}
//             <button onClick={changeText}>Click me!</button>
//         </div>
//     )
// }

// export default Changer\



import { useState } from 'react';

function Changer() {
    const [someText, setSomeText] = useState(1);

    const changeText = () => {
        if (someText == 'Foo') {
            setSomeText('Bar');
        } else {
            setSomeText('Foo');
        }
    }

    return (
        <div>
            <h2 style={{color: 'red', backgroundColor: 'blue'}}>{someText}</h2>
            <button onClick={changeText}>Click me!</button>
        </div>
    )
}

export default Changer


// 1. h2 elements ar tekstu "Foo" un zem tā ir poga "Click me". Uzpiežot uz pogas teksts nomainās uz Bar. Vērleiz uzpiežot uz Baz un pēc tam atpakaļ uz Foo. Tātad teksts mainās Foo -> Bar -> Baz
// 2. Viena poga ar uzrakstu Foo. Uzpiežot uz pogas teksts uz pogas nomainās uz Bar. Vērleiz uzpiežot uz Baz un pēc tam atpakaļ uz Foo. Tātad teksts mainās Foo -> Bar -> Baz
// 3. "Bankomāts", 4 pogas un skaitlis. Uzpiežot uz pogām, skaitlim mainās vērtība.