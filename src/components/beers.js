import { useState } from "react";

function Beers(){

    const data = [
        ["Niksicko", "Crna Gora"],
        ["Jelen", "Srbija"],
        ["Schneider", "Nemacka"],
        ["Karlovacko", "Hrvatska"],
        ["Kariotsko", "Slovenija"],
        ["Karpatsko", "Karpati"]
    ]

    const [items, setItems] = useState("");
    const [input,setInput] = useState("");

    const update = (markdown) => {
        setInput(markdown.target.value);
        setItems(data
                    .filter(i => i[0].includes(input))
                    .map(i => <li>{i[0]},  {i[1]}</li>) )           
    }

    return(
        <main>
            <div className="text-center">
                <h1 className="text-center text-black font-black my-12 text-3xl"> Pretraga </h1>
                <input onChange={update} value={input} className="text-center text-white bg-black" type="text"></input>
            </div>
            <ol type="1" className="text-center my-10 font-black text-1xl">
                {items}
            </ol>
                        
        </main>       
    )
}


export default Beers;