import React from 'react';
import { StyleSheet, Image, ScrollView, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { MaterialIcons } from '@expo/vector-icons';
import MovieList from '../components/MovieList';
import FavoriteButtonCard from '../components/FavoriteButtonCard';

const images = [
  { id: '1', imageUrl: 'https://th.bing.com/th/id/OIP.bMOrQyIjBZQ619YhLYea9wHaEW?w=296&h=180&c=7&r=0&o=5&pid=1.7', title: 'Bunker Down', subTitle: 'Alien Workshop', year: 2019, length: '37 min' },
  { id: '2', imageUrl: 'https://th.bing.com/th/id/OIP.tCgAR_tMNQ2ji5YgG2g6-QHaIl?w=200&h=182&c=7&r=0&o=5&pid=1.7', title: 'Mother', subTitle: 'Quasi Skateboards', year: 2019, length: '37 min' },
  { id: '3', imageUrl: 'https://blog.slamcity.com/wp-content/uploads/2019/06/PHOTO-2019-06-24-13-45-04-1.jpg', title: 'Trust Fall', subTitle: 'Alien Workshop', year: 2019, length: '37 min' },
];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

      <View style={{ marginLeft: 16}}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>
        <Text style={styles.title}>Ola Mariana Q.</Text>
            <MaterialIcons name={'search'} size={24} color={'#313131'} style={{ marginRight: 16, marginTop: 8 }} />
        </View>
        <Text style={styles.usernameTopQuestion}>O que voce procura hoje?</Text>
      </View>
      <ScrollView>
        <FlatList
          horizontal
          // pagingEnabled
          data={images}
          style={styles.flatlist}
          keyExtractor={image => image.id}
          snapToOffsets={[...Array(images.length).keys()].map(i => i * 328)}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item.imageUrl}} />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={{ position: 'absolute', right: 2 }} >
                        <FavoriteButtonCard />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.videoInfo}>{item.subTitle} * </Text>
                    <Text style={styles.videoInfo}>{item.year} * </Text>
                    <Text style={styles.videoInfo}>{item.length}</Text>
                  </View>
              </View>
            );
          }}
        />
    
        <View style={styles.containerTabsText}>
          <Text style={styles.tabSelected}>Lancamentos</Text>
          <Text style={styles.tabNotSelected}>Trilhas sonoras</Text>
          <Text style={styles.tabNotSelected}>Destaque</Text>
        </View>
        <MovieList/>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: 34,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#red'
  },
  image: {
    width: 328,
    height: 200,
    borderRadius: 8,
  },
  imageContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 8,
  },
  flatlist: {
    // backgroundColor: 'red',
    // marginHorizontal: 16,
    // marginVertical: 16,
  },
  card:{
    marginBottom: 48,
    marginLeft: 16,
    maxWidth: 350, 
  },
  flexDirection:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerTabsText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom: 16,
    // justifyContent: 'center'
  },
  tabSelected: {
    fontFamily: 'quicksand-bold',
    fontSize: 16,
    // color: '#313131',
    marginRight: 22,
    marginBottom: 0,
  },
  tabNotSelected: {
    fontFamily: 'quicksand-bold',
    fontSize: 16,
    // color: '#313131',
    marginRight: 22,
    marginBottom: 0,
    opacity: 0.4,
  },
  cardMenor: {
    marginLeft: 16,
    // marginTop: 16,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: 328,
  },
  title: {
    fontFamily: 'quicksand-bold',
        fontSize: 16,
        lineHeight: 20,
        marginTop: 10,
        // marginRight: 82,
        marginBottom: 8,
  },
  usernameTopQuestion:{
    fontFamily: 'quicksand-regular',
    fontSize: 14,
    lineHeight: 18,
    color: '#313131',
    opacity: 0.5,
    marginBottom: 24,
  },
  bunkerDown:{
    fontFamily: 'quicksand-bold',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 8,
  },
  favoriteBorder: {
    height: 16,
    width: 16,
    marginTop: 10,
    marginRight: 68
  },
  videoInfo:{
    fontFamily: 'quicksand-regular',
    fontSize: 14,
    margin: 0,
  },
  videoTags:{
    fontFamily: 'quicksand-regular',
    textAlign: 'center',
    fontSize: 12,
    margin: 0,
    backgroundColor: '#E5E5E5',
    width: 'auto',
    // padding: 6,
    paddingTop: 4,
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 6,
    marginRight: 13,
    borderRadius: 20,
  },
   decIncButton: {
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
  },  
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  cardMenorImage: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8, 
    marginLeft: 16
  },
});


