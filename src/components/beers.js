//import { useState } from "react";

function Beers(){

    const data = [
        ["Niksicko", "Crna Gora"],
        ["Jelen", "Srbija"],
        ["Schneider", "Nemacka"],
        ["Karlovacko", "Hrvatska"],
    ]

    //const [input] = useState("");
    const items = data.map(i => <li>{i[0]}</li>);

    return(
        <main>
            <ul>
                {items}
            </ul>            
        </main>       
    )
}


export default Beers;