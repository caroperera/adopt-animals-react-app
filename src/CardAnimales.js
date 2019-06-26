import React from 'react';
import './App.js';
import './HomeSection.css';



class CardAnimales extends React.Component {
render() {
  return (
    <div>
    <div className="col-9">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <img className="card-img-top" src={this.props.data.foto} alt="Mascotas"></img>
            <div className="card-body">
              <p className="card-text"><b>{this.props.data.nombre}</b><br />{this.props.data.sexo + ", " + this.props.data.edad}</p>
              <a className="btn btn-primary" href="Animal.html">Adoptar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
}

export default CardAnimales;





