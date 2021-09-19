import './App.css';
import React from 'react';

import Container from './Container';
import Form from './Form';
import GuideButton from './GuideButton';



function App() {
  const onClick = () => {

  };

  return (
    <div className="App">
      <Container>
        <Form/>
      </Container>
      <GuideButton/>
    </div>
  );
}

export default App;
