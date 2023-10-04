import {
  Stack,
  Box,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const BannerBody = () => {
  const fontColorHeading = useColorModeValue('brand.50', 'brand.700');
  const gradientColor = useColorModeValue(
    'linear(to-r, brand.200, brand.700)',
    'linear(to-r, brand.500, brand.100)'
  );
  const backgroundColor = useColorModeValue('brand.50', 'brand.800');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1.9 }}
      w={[300, 400, 500]}
      className={'flex-auto overscroll-none'}
    >
      <Box
        w={'full'}
        h={'auto'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        position={'relative'}
        overflow={'hidden'}
        borderWidth={'3px'}
        bgGradient={gradientColor}
        borderColor={backgroundColor}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading
              size="4xl"
              fontWeight={900}
              color={fontColorHeading}
              textShadow={'2px 2px 3px grey'}
              zIndex={1}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                Noah Hughes
              </motion.div>
            </Heading>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              <Heading
                size="xl"
                fontWeight={500}
                color={fontColorHeading}
                zIndex={2}
                textShadow={'2px 2px 3px grey'}
              >
                Front End Software Engineer
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.1 }}
            >
              <Text
                textShadow={'2px 2px 3px grey'}
                color={fontColorHeading}
                fontWeight={100}
                lineHeight={1.2}
                fontSize={useBreakpointValue({
                  base: 'md',
                  md: 'xl',
                })}
                zIndex={1}
              >
                Hey, there! I am a Full Stack Engineer based out of
                Virginia, United States. I have extensive knowledge of
                may front end and back end languages and technologies.
                Particularly well versed in Javascript, CSS, Python,
                and different SQL tools.
              </Text>
            </motion.div>
          </Stack>
          <Image
            src="https://avatars.githubusercontent.com/u/130946778?v=4"
            alt="Noah"
            s
            Picture
            rounded={'full'}
            position={'absolute'}
            bottom={-100}
            right={0}
            height="auto"
            w={[0, 0, 500]}
            size={'sm'}
            opacity={0.3}
            overflow={'hidden'}
          />
        </VStack>
      </Box>
    </motion.div>
  );
};

export default BannerBody;
