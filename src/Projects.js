import React, { Component } from 'react';
import ProjJson from './projects.json';

class Projects extends Component {
  render() {
    //console.log(ProjJson);
    return (
        <div id="projects">
          <h2>Projects</h2> 
          {
            ProjJson.map((proj, index) => (
              <div key={index} className="project-wrapper">            
                {
                  (() => {
                    if (proj.link) {
                      return (
                        <a href={proj.link} title="Click to open project" target="_blank">         
                          <h3>{proj.name}</h3>
                        </a>
                      )
                    } else {
                      return (
                        <h3>{proj.name}</h3>
                      )
                    }
                  })()
                }
                <p>
                {proj.description}
                </p>
              </div>           
            ))
          }
          <div id="project-more-text">More projects coming soon...</div>
      </div>
    )
  }  
}

export default Projects;
