import React, { Component } from 'react';
import './App.css';
import photo from './photo.jpg';
import  Navcom  from  './Nav.js';
import Photomap from './Photomap.js'
class App extends Component {
  constructor()
  {
    super();
    this.state={
      fullName:"HAYTHEM",
      imgSrc: photo,
      bio:"je suis un future ingenieur en informatique",
      profession:"Directeur Artistique",
      shows: true,
      
    }
  }



  render(){
  return (
    <div className='app'>
      <Navcom />
    {!this.state.shows && (
      <div className='all'>
        <img className='im' src={this?.state?.imgSrc} alt='tel9a el 3asba'></img>
        <h1 className='name'>{this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
        <h1>{this.state.profession}</h1>
        <div>{this.state.time}</div>
      </div>
    )}
    <button className='btn' onClick={() => this.setState({shows : !this.state.shows})}>Show</button>
    <Photomap />
    </div>
  
  );
  }
}

export default App;
