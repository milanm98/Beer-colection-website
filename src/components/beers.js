import { useState } from "react";

function Beers(props){

    const [items, setItems] = useState("");
    const [input,setInput] = useState("");
    const [searchType, setSearchType] = useState("name");

    const setCountry = () => {
        setSearchType("country");
        alert("Pretraga po drzavama");
    }

     const setName = () => {
        setSearchType("name");
        alert("Pretraga po imenima");
    }

    const update = (markdown) => {
        setInput(markdown.target.value);

        if(searchType === "name"){
            setItems(props.data
                        .filter(i => i[0].includes(input))
                        .map(i => <li>{i[0]},  {i[1]}</li>) )   
            }
        else{
            setItems(props.data
                        .filter(i => i[1].includes(input))
                        .map(i => <li>{i[0]},  {i[1]}</li>) )   
        }
    
    }

    return(
        <main>
            <div className="text-center p-6">
                <div className="flex gap-24 justify-center">
                    <div className="">
                        <label onClick={setCountry} className="fa fa-globe text-white"></label>
                    </div>
                    <div className="">
                        <label onClick={setName} className="fa fa-pencil-square-o text-white"></label>
                    </div>
                </div>
            </div>
            <div className="text-center text-white text-2xl font-black">
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