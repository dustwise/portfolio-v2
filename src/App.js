import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import IntroCard from './components/IntroCard';
import TaglineCard from './components/TaglineCard';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';
import ProjectImage from './components/ProjectImage';
import ContactCard  from './components/ContactCard';
import InfoCard from './components/InfoCard';
import projectsData from './data/projectsData';

const AppW = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 1px;
  perspective-origin: 0 0;
  font-size: 1rem;
  font-family: 'Roboto Slab', serif;
  

  @media screen and (min-width: 480px){
    font-size: 1.5rem;
  }

  @media screen and (min-width: 650px){
    font-size: 1.75rem;
  }

  @media screen and (min-width: 840px){
    font-size: 2rem;
  }

  @media screen and (min-width: 1024px){
    font-size: 1rem;
  }

  @media screen and (min-width: 1650px){
    font-size: 1.5rem;
  }
  
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background-color: yellow;

  @media screen and (min-width: 1024px){
    flex-flow: row;
  }
`;

class App extends Component {

  generateProjects(projects){
    const builtProjects = [];

     for(let project in projects){
      const { image, right, title, features, description, imagePlacement, links } = projects[project];

      builtProjects.push(
          <ProjectCard img={require(`${image}`)} right={right} imagePlacement={imagePlacement}>
            <ProjectDetails
              title={title}
              features={features}
              description={description}
              right={right}
              links={links}
            >
            </ProjectDetails>
          </ProjectCard>
      )
    }

    return builtProjects;
  }

  render() {
    return (
      <AppW className="App">
        <IntroCard />
        <TaglineCard/>
        <ProjectsWrapper>  
          {this.generateProjects(projectsData)}
        </ProjectsWrapper>   
        <ContactCard/>
      </AppW>
    );
  }
}

export default App;
