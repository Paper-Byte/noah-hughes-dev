import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import BADGES from '../../data/Badges';

const TickerBody = () => {
  return BADGES.map((badge, i) => {
    return (
      <Box key={badge.title}>
        <Image src={badge.src} alt={badge.ult} />
      </Box>
    );
  });
};

export default TickerBody;
