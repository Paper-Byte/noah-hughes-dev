import React from 'react';
import IntroVideo from './Components/IntroVideo';
import AnimatedCursor from 'react-animated-cursor';
import NavBar from './Components/NavBar/NavBarBody';
import BannerBody from './Components/Banner/BannerBody';
import Carousel from './Components/Carousel';
import { useColorModeValue } from '@chakra-ui/react';

function App() {
  const pageColor = useColorModeValue('brand.50');
  return (
    <div color={pageColor}>
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
      <BannerBody />
      <Carousel />
    </div>
  );
}

export default App;
