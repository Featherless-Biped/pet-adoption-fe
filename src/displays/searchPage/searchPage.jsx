import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pet from '../../components/Pet';

const SearchPage = () => {
const pets = useSelector((state) => state.pets);
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [color, setColor] = useState('');
  const [adoptionStatus, setAdoptionStatus] = useState('');

  const handleTypeChange = (e) => {
    setType(e.target.value);
  }

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  }

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  const handleAdoptionStatusChange = (e) => {
    setAdoptionStatus(e.target.value);
  }

  const filteredPets = pets.filter((pet) => {
    if (type && pet.type !== type) {
      return false;
    }
    if (breed && pet.breed !== breed) {
      return false;
    }
    if (color && pet.color !== color) {
      return false;
    }
    if (adoptionStatus && pet.adoptionStatus !== adoptionStatus) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={handleTypeChange}>
          <option value=""></option>
          <option value="Cooked Chicken">Cooked Chicken</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
      </div>
      <div>
        <label>Breed:</label>
        <input type="text" value={breed} onChange={handleBreedChange} />
      </div>
      <div>
        <label>Color:</label>
        <input type="text" value={color} onChange={handleColorChange} />
      </div>
      <div>
        <label>Adoption Status:</label>
        <select value={adoptionStatus} onChange={handleAdoptionStatusChange}>
          <option value=""></option>
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="adopted">Adopted</option>
        </select>
      </div>
      <div>
      {filteredPets.map(
                ({
                    _id,
                    name,
                    petName,
                    type,
                    breed,
                    height,
                    weight,
                    color,
                    shortBio,
                    hypoalergenic,
                    dietaryRestrictions,
                    picturePath,
                    adoptionStatus,
                }) => (
                    <Pet
                        key={_id}
                        petId={_id}
                        name={name}
                        petName={petName}
                        type={type}
                        color={color}
                        shortBio={shortBio}
                        hypoalergenic={hypoalergenic}
                        dietaryRestrictions={dietaryRestrictions}
                        breed={breed}
                        height={height}
                    weight={weight}
                        picturePath={picturePath}
                        adoptionStatus={adoptionStatus}
                    />
                )
            )}
      </div>
    </div>)}

    export default SearchPage
