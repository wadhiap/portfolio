import React, { Component } from 'react';
import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div id="main">
         <Header />
         <Profile />
         <Skills />
         <Projects />
    </div>
    );
  }
}

export default App;
