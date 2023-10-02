import {
  Stack,
  Box,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const BannerBody = () => {
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
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading size="4xl" fontWeight={900}>
              Noah Hughes
            </Heading>
            <Heading size="xl" fontWeight={500}>
              Full Stack Software Engineer
            </Heading>
            <Text
              color={'white'}
              fontWeight={100}
              lineHeight={1.2}
              fontSize={useBreakpointValue({
                base: 'md',
                md: 'xl',
              })}
            >
              Hey, there! I am a Full Stack Engineer based out of
              Virginia, United States. I have extensive knowledge of
              may front end and back end languages and technologies.
              Particularly well versed in Javascript, CSS, Python, and
              different SQL tools.
            </Text>
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
          />
        </VStack>
      </Box>
    </motion.div>
  );
};

export default BannerBody;
