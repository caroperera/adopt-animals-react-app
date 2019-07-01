import React from 'react';
import './App.css';
import './Header.css';
import Header from './Header.js';
import Footer from './Footer.js';
import HomeSection from './HomeSection.js';
import NewAnimal from './NewAnimal.js';
import Animal from './Animal.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      section: 1,
    };
  }


  getNextProductId() {
    var productWithHighestId = this.state.products.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1;
    } else {
      return productWithHighestId.id + 1; 
    }
  }

  

  goToHomeSection = () => {
    this.setState({
      section: 1
    });
  }

  goToAnimal = () => {
    this.setState({
      section: 2
    });
  }

  goToNewAnimal = () => {
    this.setState({
      section: 3
    });
  }


  renderCurrentSection() {
    switch (this.state.section) {
      case 3:
        return (
          <NewAnimal />
        );
        case 2:
        return (
          <Animal />
        );
      case 1:
      default:
        return <HomeSection products={this.state.userProducts} 
        addNewAnimal={this.addNewAnimal}/>;
    }
  }

  render() {
    return (
      <div>
        <Header
          goToHomeSection={this.goToHomeSection}
          goToAnimal={this.goToAnimal}
          goToNewAnimal={this.goToNewAnimal}
/>
        <main>

          {this.renderCurrentSection()}
          
        </main>

        <Footer />
      </div>
    );
  }
}



export default App;
