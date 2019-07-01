import React from 'react';
import './App.js';
import './HomeSection.css';
import CardAnimales from './CardAnimales.js';


class HomeSection extends React.Component {

  state = {
    animals: [

    ]
  }



  componentDidMount() {
    const animals = '/json/animals.json';

    fetch(animals).then(function (response) {
      return response.text();
    })
      .then(data => {
        let jsonData = JSON.parse(data);
        this.setState({
          animals: jsonData
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }


  

  render() {

    let animals = this.state.animals.map(function (animal) {
      return <CardAnimales data={animal} /> 
    });

    return (
      <div>

        <div className="container-fluid catalogo">
          <div className="row">
            <div className="col col-12">
              <div className="container">
                <div className="titulo-ppal">¡Bienvenidos a Adopt Dogs!</div>
                <div className="bajada">Estos perros sin hogar buscan una familia que los quiera y los cuide</div>

                <div className="row">

                  {animals} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

);
  }
}

export default HomeSection;