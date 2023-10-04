import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import BADGES from '../data/Badges';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const Carousel = () => {
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
        <Box textAlign={'center'} w={'full'} whiteSpace={'nowrap'}>
          <Heading display={'inline'} textShadow={'2px 2px 3px grey'}>
            My Ever Growing Toolbox
          </Heading>
          <Image
            src="https://i.giphy.com/media/bCBZaPWhl515tcyVjo/giphy.webp"
            alt="tool gif"
            w={[10, 20, 50]}
            display={'inline'}
          />
        </Box>
        <Box className="embla" w={'full'} overflow={'hidden'}>
          <Box className="embla__viewport" ref={emblaRef}>
            <Box className="embla__container">
              {BADGES.map((badge) => (
                <Box
                  className="embla__slide"
                  key={badge.name}
                  rounded={'md'}
                >
                  <Image
                    className="embla__slide__img"
                    src={badge.src}
                    alt="Your alt text"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Carousel;
