import React from 'react';
import {
  Box,
  Text,
  Image,
  useColorModeValue,
  Flex,
  Heading,
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
      <Box
        textAlign={'center'}
        w={'full'}
        whiteSpace={'nowrap'}
        paddingTop={'5%'}
        paddingBottom={'2%'}
      >
        <Image
          src="https://i.giphy.com/media/5eLDrEaRGHegx2FeF2/giphy.webp"
          alt="tool gif"
          w={[10, 41, 50]}
          display={'inline'}
        />
        <Heading
          display={'inline'}
          textShadow={'2px 2px 3px grey'}
          textDecoration={'underline'}
        >
          Some Of My Projects
        </Heading>
        <Image
          src="https://i.giphy.com/media/5eLDrEaRGHegx2FeF2/giphy.webp"
          alt="tool gif"
          w={[10, 41, 50]}
          display={'inline'}
        />
      </Box>
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
          boxShadow={'-14px -12px 31px 2px rgba(137, 137, 137, 0.76)'}
        >
          <Image
            _hover={{ scale: 5 }}
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
            fontWeight={'400'}
            textShadow={'2px 2px 3px grey'}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Tempore magni nisi ea optio alias cum itaque, autem
            expedita necessitatibus iste aliquid doloribus laudantium
            consequuntur nam, quidem nemo voluptatem vero eveniet.
          </Text>
        </Box>
      </Flex>
      <Flex wrap={'wrap-reverse'}>
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
            fontWeight={'400'}
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
            boxShadow={
              '14px -12px 31px 2px rgba(137, 137, 137, 0.76)'
            }
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
