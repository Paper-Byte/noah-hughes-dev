import React from 'react';
import {
  Box,
  Text,
  Image,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ProjectsContainer = () => {
  const cardColor = useColorModeValue('brand.400', 'brand.200');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.1 }}
    >
      <Flex wrap={'wrap'}>
        <Box
          h={[200, 260, 370, 375]}
          w={['full', 'full', 'full', '48%']}
          backgroundColor={cardColor}
          rounded={'md'}
          padding={2}
          shadow={'2xl'}
          display={'inline-block'}
          margin={4}
        >
          <Image
            h={'100%'}
            w={'full'}
            src={
              process.env.PUBLIC_URL + '/projects/lorem-ipsum-cms.png'
            }
          />
        </Box>
        <Box
          w={['full', 'full', 'full', '48%']}
          textAlign={'center'}
          verticalAlign={'center'}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
        >
          <Text
            fontSize={'2xl'}
            fontStyle={'italic'}
            fontWeight={'700'}
            textShadow={'2px 2px 3px grey'}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Tempore magni nisi ea optio alias cum itaque, autem
            expedita necessitatibus iste aliquid doloribus laudantium
            consequuntur nam, quidem nemo voluptatem vero eveniet.
          </Text>
        </Box>
      </Flex>
      <Flex wrap={'wrap'}>
        <Box
          w={['full', 'full', 'full', '48%']}
          textAlign={'center'}
          verticalAlign={'center'}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
        >
          <Text
            fontSize={'2xl'}
            fontStyle={'italic'}
            fontWeight={'700'}
            textShadow={'2px 2px 3px grey'}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Tempore magni nisi ea optio alias cum itaque, autem
            expedita necessitatibus iste aliquid doloribus laudantium
            consequuntur nam, quidem nemo voluptatem vero eveniet.
          </Text>
        </Box>
        <Box
          h={[200, 260, 370, 375]}
          w={['full', 'full', 'full', '48%']}
          backgroundColor={cardColor}
          rounded={'md'}
          padding={2}
          shadow={'2xl'}
          display={'inline-block'}
          margin={4}
        >
          <Image
            h={'100%'}
            w={'full'}
            src={
              process.env.PUBLIC_URL + '/projects/pokemon-team.png'
            }
          />
        </Box>
      </Flex>
    </motion.div>
  );
};

export default ProjectsContainer;
