import React from 'react';

import {Box, Flex, Text, Slider} from 'native-base';

export default function PriceRange() {
  return (
    <Box>
      <Flex direction="row" w="100%" justifyContent="space-between">
        <Text fontWeight="medium" color="muted.500">
          Price range
        </Text>
        <Text fontWeight="medium" color="muted.700">
          5300+
        </Text>
      </Flex>
      <Slider defaultValue={80} size="lg">
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
