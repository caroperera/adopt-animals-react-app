import React from 'react';
import './Header.css';
import './App.js';


class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="container-fluid header">
            <div className="row">
              <div className="col col-auto">
                <a href="HomeSection"><img className="logo" src="/assets/logo.png" alt="Logo Adopt Dogs"
                  title="Logo Adopt Dogs"></img></a>
              </div>
            </div>
          </div>

          <div className="buscador">
            <div className="container-fluid">
              <div className="row buscador">
                <div className="col col-auto">
                  <form action="url-to-server.php" method="post">
                    <select className="custom-select">
                      <option value="">Raza</option>
                      <option value="Ovejero Aleman">Ovejero Alemán</option>
                      <option value="Jack Russell Terrier">Jack Russell Terrier</option>
                      <option value="Bulldog Frances">Bulldog Francés</option>
                      <option value="San Bernardo">San Bernardo</option>
                      <option value="Doberman">Dóberman</option>
                    </select>
                  </form>
                </div>

                <div className="col col-auto">
                  <form action="url-to-server.php" method="post">
                    <select className="custom-select">
                      <option value="">Sexo</option>
                      <option value="Macho">Macho</option>
                      <option value="Hembra">Hembra</option>
                    </select>
                  </form>
                </div>

                <div className="col col-auto">
                  <form action="url-to-server.php" method="post">
                    <select className="custom-select">
                      <option value="">Edad</option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="1 año">1 año</option>
                      <option value="2 años">2 años</option>
                      <option value="3 años">3 años</option>
                      <option value="4 años">4 años</option>
                      <option value="Mas de 4 años">Más de 4 años</option>
                    </select>
                  </form>
                </div>

                <div className="col col-auto">
                  <form action="url-to-server.php" method="post">
                    <select className="custom-select">
                      <option value="Buceo">Buceo</option>
                      <option value="Malvin">Malvin</option>
                      <option value="Pocitos">Pocitos</option>
                      <option value="Punta Carretas">Punta Carretas</option>
                      <option value="Cordon">Cordón</option>
                      <option value="Carrasco">Carrasco</option>
                    </select>
                  </form>
                </div>


                <div className="col col-auto">
                  <form>
                    <a href="list.html" className="btn btn-primary card buscador">Buscar</a>
                  </form>
                </div>

                <div className="col col-auto">
                  <form>
                    <a href="newAnimal.html" className="btn btn-primary card buscador registrar">Registrar nuevo perro</a>
                  </form>
                </div>


              </div>
            </div>
          </div>
        </header>


      </div>
    );
  }
}

export default Header;






