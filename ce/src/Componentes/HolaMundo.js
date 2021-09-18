import React from 'react';
import {useEffect,useState} from 'react';

function Holamundo() {

    const url='https://api.jikan.moe/v3/search/anime?q=naruto'
    const [datos, setDatos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJson = await response.json()
        setDatos(responseJson.results)
        console.log(responseJson)
    }
    useEffect(()=>{
    fetchApi()
    },[])

    return(
        <div className="contenido">
            <ul>
                {!datos ? 'no hay datos':
                datos.map((datos,index) =>{
                    return<li>{datos.synopsis}</li>
                })
            }
            </ul>
        </div>
    );
}
  
  export default Holamundo;
  