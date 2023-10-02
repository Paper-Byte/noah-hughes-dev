import {
  Stack,
  Box,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const BannerBody = () => {
  return (
    <Box
      w={'full'}
      h={80}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed
            do eiusmod tempor
          </Text>
        </Stack>
      </VStack>
    </Box>
  );
};

export default BannerBody;
