import React from 'react';
import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ProjectsContainer = () => {
  const cardColor = useColorModeValue('brand.400', 'brand.200');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.1 }}
    >
      <Flex justifyContent={'space-between'}>
        <Box
          w={['full', 'full', 'full', '50%']}
          backgroundColor={cardColor}
          rounded={'md'}
          margin={2}
        >
          <motion.img
            padding={2}
            src={
              process.env.PUBLIC_URL + '/projects/lorem-ipsum-cms.png'
            }
          />
        </Box>
        <Box w={['full', 'full', 'full', '50%']} textAlign={'center'}>
          <Text padding={'200'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Tempore magni nisi ea optio alias cum itaque, autem
            expedita necessitatibus iste aliquid doloribus laudantium
            consequuntur nam, quidem nemo voluptatem vero eveniet.
          </Text>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default ProjectsContainer;
