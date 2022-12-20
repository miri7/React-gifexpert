import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GitExtepertApp = () => {
  const [listado, setListado] = useState([
    'onepunch'
  ]);
  const addCategoria = (onNewCategory) =>{
    if(listado.includes(onNewCategory)) return 
    setListado([...listado,onNewCategory])
  }
  return (
    <div>
      <h4>Realizacion de ingreso de datos</h4>
      <AddCategory onNewCategory={addCategoria}/>
      <ol>
        {listado.map((categoria) => (
            <GifGrid 
                key={categoria}
                categoria={categoria}
            />
        ))}
      </ol>
    </div>
  );
};

export default GitExtepertApp;
