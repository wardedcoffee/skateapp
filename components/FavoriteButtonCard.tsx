import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const FavoriteButtonCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePress = () => {
    setIsFavorite(!isFavorite);
    console.log('fui clicado, movendo para favoritos');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <MaterialIcons
          name={isFavorite ? 'favorite' : 'favorite-border'}
          size={24}
          color={isFavorite ? 'black' : '#828A9B'}
          style={{ marginTop: 8 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteButtonCard;
