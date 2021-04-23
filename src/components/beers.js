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
    const [searchType, setSearchType] = useState("");

    const updateSelect = ( selected ) => {
        setSearchType(selected.target.value);
    }

    const update = (markdown) => {
        setInput(markdown.target.value);

        if(searchType === "name"){
            setItems(data
                        .filter(i => i[0].includes(input))
                        .map(i => <li>{i[0]},  {i[1]}</li>) )   
            }
        else{
            setItems(data
                        .filter(i => i[1].includes(input))
                        .map(i => <li>{i[0]},  {i[1]}</li>) )   
        }
        
    }

    return(
        <main>
            <div className="text-center text-white text-2xl font-black">
                <select onChange={updateSelect} className="mt-6 w-32 text-white bg-black border-2 border-white">
                    <option value="country">Drzava</option>
                    <option value="name">Ime</option>
                </select>
                <input onChange={update} value={input} className="border-2 border-white mt-20 w-5/6 h-12 text-2xl text-center text-white bg-gray-900" type="text"></input>
            </div>
            <div className="w-full text-center h-auto bg-gray-900">
                <ol className="text-white my-3 text-center font-black text-2xl">
                    {items}
                </ol>
            </div>
        </main>       
    )
}


export default Beers;