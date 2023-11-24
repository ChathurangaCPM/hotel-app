import React, {useState} from 'react';

import {Box, Flex, Text, Slider} from 'native-base';

export default function PriceRange() {
  const [price, setPrice] = useState(30);
  return (
    <Box>
      <Flex direction="row" w="100%" justifyContent="space-between">
        <Text fontWeight="medium" color="muted.500">
          Price range
        </Text>
        <Text fontWeight="medium" color="muted.700">
          {price * 100}+
        </Text>
      </Flex>
      <Slider
        defaultValue={30}
        size="lg"
        minValue={30}
        onChange={v => {
          setPrice(Math.floor(v));
        }}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <Flex direction="row" w="100%" justifyContent="space-between">
        <Text fontSize="10" textTransform="uppercase" color="muted.500">
          Min
        </Text>
        <Text fontSize="10" textTransform="uppercase" color="muted.500">
          Avarage
        </Text>
        <Text fontSize="10" textTransform="uppercase" color="muted.500">
          Max
        </Text>
      </Flex>
    </Box>
  );
}
