import React from 'react';
import {
  Box,
  Center,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import BADGES from '../data/Badges';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const Carousel = () => {
  const cardColor = useColorModeValue('brand.200', 'brand.500');
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 1000 })]
  );
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.3 }}
      >
        <Box textAlign={'center'} w={'full'}>
          <Heading>My Ever Growing Toolbox</Heading>
        </Box>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {BADGES.map((badge) => (
                <Box
                  className="embla__slide"
                  key={badge.name}
                  rounded={'md'}
                  color={cardColor}
                >
                  <Image
                    className="embla__slide__img"
                    src={badge.src}
                    alt="Your alt text"
                  />
                </Box>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Carousel;
