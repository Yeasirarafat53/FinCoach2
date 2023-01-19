import React from 'react';

import {View, Image} from 'react-native';

const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri:
            'http://184.168.127.174:5700/asset-common/logo/FinCoach5.png',
        }}
        style={{
            width: "52%",
            height: 39,
            margin:20,
        }}
      />
    </View>
  );
};

export default ActionBarImage;