import React from 'react';
import './App.js';
import './CardAnimales.css';



class CardAnimales extends React.Component {



  render() {
    return (
      <div className="col col-md-3 col-sm-6 col-xs-12">
        <div className="card animales">
          <img className="card-img-top" src={this.props.data.foto} alt="Ovejero Aleman Paco"></img>
          <div className="card-body">
            <h5 className="card-title"><b>{this.props.data.nombre}</b></h5>
            <p className="card-text-title">Raza</p>
            <p className="card-text-description">{this.props.data.raza}</p>
            <p className="card-text-title">Sexo</p>
            <p className="card-text-description">{this.props.data.sexo}</p>
            <p className="card-text-title">Edad</p>
            <p className="card-text-description">{this.props.data.edad}</p>
            <a href="#" className="btn btn-primary card" onClick={this.props.goToFichaAnimal}>Más info</a>
          </div>
        </div>
      </div>

    )
  }
}

export default CardAnimales;

