import React from 'react';
import IntroVideo from './Components/IntroVideo';
import AnimatedCursor from 'react-animated-cursor';
import NavBar from './NavBar/NavBarBody';

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={8}
        color="98, 98, 106"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      <IntroVideo />
      <NavBar />
    </>
  );
}

export default App;
