import React from 'react';
import './App.js';
import './Animal.css';



class Animal extends React.Component {

  render() {

    return (
      <div>
        <div className="container-fluid ficha">
          <div className="row">
            <div className="col col-12">
              <div className="container animal">
                <div className="row">
                  <div className="col col-6 bg-full"></div>
                  <div className="col col-6">
                    <div className="card animal">
                      <h5 className="card-title"><b>Paco</b></h5>
                      <p className="card-text-title">Raza</p>
                      <p className="card-text-description">Ovejero Alemán</p>
                      <p className="card-text-title">Sexo</p>
                      <p className="card-text-description">Macho</p>
                      <p className="card-text-title">Edad</p>
                      <p className="card-text-description">9 años</p>
                      <p className="card-text-title">Barrio</p>
                      <p className="card-text-description">Buceo</p>
                      <p className="card-text-title">Descripción</p>
                      <p className="card-description-block">Es guardián y muy cariñoso. Buscamos una familia que lo quiera y
                        lo cuide. Lamentablemente le tenemos que buscar otro hogar porque nos vamos a vivir al exterior y no
                  lo podemos llevar con nosotros. </p>

                      <a href="#" className="btn btn-primary card">ADOPTAR</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Animal;

