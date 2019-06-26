import React from 'react';
import './App.js';
import './HomeSection.css';
import CardAnimales from './CardAnimales.js';

class HomeSection extends React.Component {
  
    state = {
      animals: [
        {
          nombre: "Suki",
          raza: "ovejero",
          edad: "3 meses",
          sexo: "Hembra",
          foto: "/assets/ovejero-suki.jpg"
        },
        {
          nombre: "Suki2",
          raza: "ovejero",
          edad: "3 meses",
          sexo: "Hembra",
          foto: "/assets/ovejero-suki.jpg"
        },
        {
          nombre: "Suki3",
          raza: "ovejero",
          edad: "3 meses",
          sexo: "Hembra",
          foto: "/assets/ovejero-suki.jpg"
        }
      ]
    }
  
  render() {
   
    let animals = this.state.animals.map(function(animal){
      return <CardAnimales data={animal} />
    });
   
    return (
   <div>
    {animals}

   </div>
   );
   }
  }

export default HomeSection;