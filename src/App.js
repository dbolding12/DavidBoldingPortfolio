import React from 'react';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
import Projects from "./components/Projects"
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas);


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Projects />
      </Wrapper>
    </div>
  );
}

export default App;