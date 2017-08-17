import React, { Component } from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import CodeMirror from 'react-codemirror2';
import Editor from './components/Editor';
import ProjectCard from './components/ProjectCard';
import { code, data } from './lib/data';
import pogTrackerImg from './images/pogtracker-2.png';
import protoPageImg from './images/protopage-min.png';
import rocketGarageImg from './images/rocket-garage-cropped-2.png';

import './App.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('./styles/titleEditor.css');

const AppW = styled.div`
  height: 100vh;
`;

const SectionW = styled.div`
  background-image: ${props => props.color};
  padding: 5vh 5vw;
`;

const CodeMirrorW = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const Glitch = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={3000}
    classNames="glitch"
    appear={true}
  >
    {children}
  </CSSTransition>
);

class App extends Component {

  constructor(){
    super();

    this.state = {
      in: true
    }
  }

  componentDidMount(){
    this.infoTitle.cm.editor.focus();
    this.infoTitle.cm.editor.setCursor(this.infoTitle.cm.editor.lineCount(), 0);
  }

  generateProjects(data){
    return data.map(({img, code, links}) => {
      return <ProjectCard img={img} code={code} links={links}/>
    });
  }

  render() {
    return (
      // <Glitch in={this.state.in}>
        <AppW className="App">

            <SectionW color="linear-gradient(to right, #4facfe 0%, #00f2fe 100%)">
              <Editor ref={e => this.infoTitle = e} code="class JaredMohney extends Developer {" theme={'titleEditor'} />
              <Editor code={code.info}/>
              <Editor code="}" theme={'titleEditor'} />
            </SectionW>

            <SectionW color="linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)">
              <Editor code="const projects = [" theme={'titleEditor'} />
              {this.generateProjects(data)}
              <Editor code="];" theme={'titleEditor'} />
            </SectionW>

        </AppW>
      // </Glitch>
    );
  }
}

export default App;
