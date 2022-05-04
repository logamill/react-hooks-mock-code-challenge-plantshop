import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [formPlant, setFormPlant] = useState('')
  const [searchedPlant, setSearchedPlant] = useState('')

  useEffect(() => {
    getFetch()
  }, [])

  console.log(plants)

  function getFetch() {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  }

  // form submit and add new plant to data
  function handleNewPlant(e) {
    e.preventDefault()
    const newFormPlant = {
      id: (plants.length + 1),
      name: e.target['name'].value,
      image: e.target['image'].value,
      price: e.target['price'].value
    }
    setPlants([...plants, newFormPlant])
  }



  function handleSearch(e) {
    setSearchedPlant((searchedPlant) => searchedPlant = e.target.value)
    const newPlants = plants.filter((plant) => {
      return (plant.name.toLowerCase().includes(searchedPlant))
    })
    setPlants(newPlants)
    
    console.log(e.target.value)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleNewPlant={handleNewPlant} handleSearch={handleSearch} />
    </div>
  );
}

export default App;
