import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleNewPlant, handleSearch  }) {

  
  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
