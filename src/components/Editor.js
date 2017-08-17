import React, { Component } from 'react';
import styled from 'styled-components';
import { hyperlinkOverlay } from '../lib/tools';
import CodeMirror from 'react-codemirror2';

require('../styles/editor.css');
require('../styles/titleEditor.css');
require('../styles/projectEditor.css');

// require('codemirror/addon/fold/foldgutter.css');
// require('codemirror/addon/fold/foldcode.js');
// require('codemirror/addon/fold/foldgutter.js');
// require('codemirror/addon/fold/markdown-fold.js');
// require('codemirror/addon/fold/indent-fold.js');
// require('codemirror/addon/fold/brace-fold.js');

const CodeW = styled.div`
  display: flex;
  overflow: hidden;
  width: ${props => props.project ? '45%' : '100%'};
`;

class Editor extends Component {

  componentDidMount(){
    this.cm.editor.getWrapperElement().addEventListener('mousedown', (e) => {
      if(e.target.classList.contains('cm-url')){

        if(e.target.innerText.includes("@gmail.com")){
          window.location.href = "mailto:jared.mohney@gmail.com";
        }else{
          window.open(e.target.innerText, '_blank');
        }
      }
    });

    hyperlinkOverlay(this.cm.editor);
  }

  render() {
    return (
      <CodeW project={ this.props.project }>
        <CodeMirror
          ref={c => this.cm = c}
          value={this.props.code}
          options={{
            mode: 'javascript',
            theme: this.props.theme ? this.props.theme : 'editor',
            lineWrapping: true,
          }}
          onValueChange={(editor, metadata, value) => {
            console.log("hola")
          }}
        />
      </CodeW>
    );
  }
}

export default Editor;