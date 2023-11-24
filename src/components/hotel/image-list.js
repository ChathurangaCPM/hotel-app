import React, {useEffect, useState} from 'react';
import {Box, HStack, Image, Button, Pressable} from 'native-base';
import {Dimensions, View} from 'react-native';
import ImageView from 'react-native-image-viewing';

const {width} = Dimensions.get('screen');

const ImageList = ({ images, onDelete }) => {
  const [visible, setIsVisible] = useState({});
  const [popupImages, setPopupImage] = useState([]);

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const handlerImageView = (rowIndex, colIndex) => {
    const overallIndex = rowIndex * 2 + colIndex;
    setIsVisible({
      isVisible: true,
      index: overallIndex,
    });
  };

  
  const handlerImageDelete = (rowIndex, colIndex) => {
    const overallIndex = rowIndex * 2 + colIndex;
    onDelete(overallIndex);
  };

  

  useEffect(() => {
    if (images && images.length > 0) {
      const getImageUrls = images.map(d => {
        return {
          uri: d.url,
        };
      });
      setPopupImage(getImageUrls);
    }
  }, [images]);

  return (
    <View>
      {popupImages && popupImages.length > 0 && (
        <ImageView
          images={popupImages}
          imageIndex={visible.index}
          visible={visible.isVisible}
          onRequestClose={() =>
            setIsVisible({
              isVisible: false,
            })
          }
        />
      )}
      {chunkArray(images, 2).map((row, rowIndex) => (
        <HStack space={1} mb={1} key={rowIndex}>
          {row.map((image, colIndex) => (
            <Pressable
              onPress={() => handlerImageView(rowIndex, colIndex)}
              key={colIndex}
              w={width / 2}
              h={width / 2}>
              <Image
                size="100%"
                resizeMode="cover"
                source={{uri: image.url}}
                alt={image.title}
              />
              <Button
                position="absolute"
                bottom="10px"
                right="10px"
                size="sm"
                onPress={() => handlerImageDelete(rowIndex, colIndex)}>
                Delete
              </Button>
            </Pressable>
          ))}
        </HStack>
      ))}
    </View>
  );
};

export default ImageList;
