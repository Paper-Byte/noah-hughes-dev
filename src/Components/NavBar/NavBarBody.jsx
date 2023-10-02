import {
  Box,
  Flex,
  useColorModeValue,
  Image,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import DarkModeSwitch from './DarkModeSwitch';

const NavBar = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.9 }}
        w={[300, 400, 500]}
        className={'flex-auto overscroll-none'}
      >
        <Box bg={useColorModeValue('brand.50', 'brand.50')} px={4}>
          <Flex
            h={89}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box paddingLeft={10}>
              <HStack>
                <Image
                  src={process.env.PUBLIC_URL + '/favicon.ico'}
                  h={20}
                />
                <DarkModeSwitch />
              </HStack>
            </Box>
            <Flex w="50%"></Flex>
            <Flex alignItems={'center'}>
              <Box>
                <Image
                  rounded={'full'}
                  h="auto"
                  w={[100, 200, 300]}
                  src={
                    'https://avatars.githubusercontent.com/u/130946778?v=4'
                  }
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </motion.div>
    </>
  );
};

export default NavBar;
