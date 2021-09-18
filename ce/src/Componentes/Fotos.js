import React from 'react';
import {useEffect,useState} from 'react';

function Fotos() {
    const url = 'https://api.github.com/users'
  const [usuarios, setUsuarios] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setUsuarios(responseJSON)
    //console.log(responseJSON)
  }
  useEffect(() =>{
    fetchApi()
  }, [])
  return (
    <div className="Contenido">
    <ul>
      { !usuarios ? 'cargando...' : 
        usuarios.map( (usuarios,index) =>{
         return <li key={index} > {usuarios.login}</li>
      })
      }
    </ul>
    </div>
  );
}
  export default Fotos;