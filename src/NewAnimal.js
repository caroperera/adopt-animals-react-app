import React from 'react';
import './App.css';
import './NewAnimal.css';



class NewAnimal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  /* addNewAnimal = (newAnimalItem) => {
    this.setState({
      animals: [...this.state.animals, newAnimalItem]
    });
  };
 */

addNewAnimal = (newAnimalItem) => {
  console.log(newAnimalItem);
  this.setState({
     animals: [...this.state.animals, newAnimalItem]
  });
};

 handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleNombreChange = (event) => {
    this.setState({ nombre: event.target.value });
  }

  handleCiudadChange = (event) => {
    this.setState({ nombre: event.target.value });
  }

  handleBarrioChange = (event) => {
    this.setState({ nombre: event.target.value });
  }

  handleRazaChange = (event) => {
    this.setState({ nombre: event.target.value });
  }


  handleNombreDuenoChange = (event) => {
    this.setState({ nombre: event.target.value });
  }

  handleSexoChange = (event) => {
    this.setState({ nombre: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault ();
    this.props.addNewAnimal({
      nombre: this.state.nombre,
      raza: this.state.raza,
      edad: this.state.edad,
      sexo: this.state.sexo,
      foto: 'assets/img-generica.jpg'
    });
    this.setState({
      nombre: '',
      raza: '',
      edad: '',
      sexo: '',
      foto: '',
    });
  }


  render() {
    return (


      <div className="container-fluid ficha">

        <form onSubmit={this.handleSubmit}>
          <div className="titulo-ppal-newanimal">Ingresa un nuevo perro en adopción</div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="NombrePerro">Nombre del perro</label>
              <input type="texto" value={this.state.nombre} onChange={this.handlenombreChange} className="form-control" id="NombrePerro" placeholder=""></input>
            </div>
            <div className="form-group col-md-6">
              <label for="NombreDueño">Nombre del dueño</label>
              <input type="texto" value={this.state.dueno} onChange={this.handleNombreduenoChange} className="form-control" id="NombreDueño" placeholder=""></input>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="Ciudad">Ciudad</label>
              <input type="texto" value={this.state.ciudad} onChange={this.handleciudadChange} className="form-control" id="Ciudad" placeholder=""></input>
            </div>
            <div className="form-group col-md-4">
              <label for="Barrio">Barrio</label>
              <input type="texto" value={this.state.barrio} onChange={this.handlebarrioChange} className="form-control" id="Barrio" placeholder=""></input>
            </div>
            <div className="form-group col-md-4">
              <label for="Raza">Raza</label>
              <input type="texto" value={this.state.raza} onChange={this.handlerazaChange} className="form-control" id="Raza" placeholder=""></input>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="sexo">Sexo</label>
              <select id="sexo" className="form-control" value={this.state.sexo} onChange={this.handlesexohange}>
                <option selected>Sexo</option>
                <option>Macho</option>
                <option>Hembra</option>
              </select>
            </div>

            <div className="form-group col-md-4">
              <label for="Color de pelo">Color de pelo</label>
              <input type="texto" value={this.state.colorpelo} onChange={this.handlecolorpeloChange} className="form-control" id="color-pelo" placeholder=""></input>
            </div>
            <div className="form-group col-md-4">
              <label for="Color de ojos">Color de ojos</label>
              <input type="texto" value={this.state.colorojos} onChange={this.handlecolorojosChange} className="form-control" id="color-ojos" placeholder=""></input>
            </div>

          </div>


          <button onClick={this.props.addNewAnimal} type="submit" className="btn btn-primary card buscador">Registrar</button>
        </form>
      </div>

    );
  }
}



export default NewAnimal;
