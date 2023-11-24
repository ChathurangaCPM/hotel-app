import React from 'react';
import {Image, Text, View} from 'native-base';

const SingleTab = ({focused, icon, label, count}) => {
  return (
    <View>
      <Image
        alt="tab"
        source={icon}
        w={5}
        h={5}
        tintColor={focused ? 'primary.700' : 'muted.400'}
      />
    </View>
  );
};

export default SingleTab;
