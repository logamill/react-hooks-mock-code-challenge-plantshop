import React, { useState } from "react";

function PlantCard({ plants }) {
  const [stock, setStock] = useState(true)
  const [newPlants, setNewPlants] = useState([])

  function handleStock() {
    setStock((stock) => stock = !stock)
  }

  const plantsToDisplay = plants.map((plant) => {
    // plant.stock = true
    return (
      <div key={plant.id}>
        <li className="card">
        <img src={plant.image} alt={plant.name} />
        <h4>{plant.name}</h4>
        <p>Price: {plant.price}</p>
        <button id={plant.id} onClick={() => handleStock()} value={stock} className="primary" style={stock === true ? {background : 'green'} :{background: 'grey'} }>{stock === true ? 'In Stock' : 'Out of Stock'}</button>
      </li>
    </div>
    )
  })
  console.log(plantsToDisplay)

  return (
    <>
      {plantsToDisplay}
    </>
    );
}

export default PlantCard;
