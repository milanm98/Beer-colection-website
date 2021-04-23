import {useState} from 'react'

function AddNewBeers(props){

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");

    const handleChangeName = (name) => {
        setName(name.target.value);
    }

    const handleChangeCountry = (country) => {
        setCountry(country.target.value);
    }

    const handleClick = () => {
        try{
            props.data.push([name, country]);
            alert("Uspesno dodato");
        } 
        catch {
            alert("Greska, probajte opet.");
        }
        
    }

    return(
        <main className="flex justify-center items-center text-center">
            <div className="mt-20 w-screen h-screen font-black text-white text-2xl">
                <h1> Dodaj novo pivo : </h1>
                <input onChange={handleChangeName} placeholder="ime piva" className="border-2 border-white mt-20 w-5/6 h-12 text-2xl text-center text-white bg-gray-900" type="text"></input>
                <input onChange={handleChangeCountry} placeholder="drzava porekla" className="border-2 border-white mt-20 w-5/6 h-12 text-2xl text-center text-white bg-gray-900" type="text"></input>
                <button onClick={handleClick} className="border-2 border-white mt-20 w-5/6 h-12 text-2xl text-center text-white bg-gray-900 ">Dodaj</button>
            </div>  
        </main>
    )
}

export default AddNewBeers;