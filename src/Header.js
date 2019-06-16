import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div id="header">
          <h1>Pritesh Wadhia's Portfolio</h1>
          <div id="header-strapline">Full Stack Developer</div>
          <div id="contact-wrapper">
            <a href="mailto:pritesh.wadhia@gmail.com">pritesh.wadhia@gmail.com</a>
            <a href="https://github.com/wadhiap" target="_blank">GitHub</a>
          </div>
        </div>
    );
  }
}

export default Header;
