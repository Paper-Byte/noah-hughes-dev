import React from 'react';
import { motion } from 'framer-motion';
import { Flex } from '@chakra-ui/react';

const IntroVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2, delay: 1 }}
      onTransitionEnd={{ display: 'none' }}
      w={[300, 400, 500]}
      className={'flex-auto overscroll-none'}
    >
      <Flex
        bg="brand.50"
        h="100%"
        w="100%"
        position={'fixed'}
        zIndex={4}
      >
        <video autoPlay muted>
          <source
            src={process.env.PUBLIC_URL + '/brand-video.mp4'}
            type="video/mp4"
          />
        </video>
      </Flex>
    </motion.div>
  );
};

export default IntroVideo;
