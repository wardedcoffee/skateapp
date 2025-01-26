import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import FavoriteButtonCard from './FavoriteButtonCard';

const MovieList = () => {
    const images = [
        require('../assets/images/image_1.png'),
        require('../assets/images/image_2.png'),
        require('../assets/images/image_4.png'),
        require('../assets/images/image_5.png'),
    ];
    const movies = [
        { image: images[0], title: 'Bunker Down', subTitle: 'Alien Workshop', year: 2019, length: '37 min' },
        { image: images[1], title: 'The Shawshank Redemption', subTitle: 'Alien Worshop', year: 1994, length: '142 min' },
        { image: images[2], title: 'The Godfather', subTitle: 'Alien Workshop', year: 1972, length: '175 min' },
        { image: images[3], title: 'The Dark Knight', subTitle: 'Alien Workshop', year: 2008, length: '152 min' },
        // Add more movies as needed
    ];

    movies.forEach(movie => {
        if (movie.title.length >= 17 || movie.subTitle.length >= 17) {
            movie.title = movie.title.slice(0, 17) + '...';
            movie.subTitle = movie.subTitle.slice(0, 17) + '...';
        }
    });


    return (
        <ScrollView style={styles.container}>
            {movies.map((movie, index) => (
                <View key={index} style={styles.movieItem}>
                    <Image source={movie.image} style={styles.cardMenorImage} />
                    <View style={{ flexDirection: 'column', marginLeft: 16, backgroundColor: '#FFF' }}>
                        <View style={{ flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <Text style={styles.title}>{movie.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 8, backgroundColor: '#FFF' }}>
                            <Text style={styles.videoInfo}>{movie.subTitle} * </Text>
                            <Text style={styles.videoInfo}>{movie.year} * </Text>
                            <Text style={styles.videoInfo}>{movie.length}</Text>                  
                        </View>
                        <View style={{ flexDirection:'row', marginTop: 10, backgroundColor: '#FFF' }}>
                            <Text style={styles.videoTags}>Trilha sonora</Text>
                            <Text style={styles.videoTags}>Defon</Text>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', right: 16, top: 0 }} >
                        <FavoriteButtonCard />
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    movieItem: {
        // marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 8, 
        flexDirection: 'row',
        // marginRight: 16,
        marginBottom: 16, 
    },
    cardMenorImage: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        width: 89,
        height: 120,
    },
    title: {
        // fontSize: 18,
        // fontWeight: 'bold',
        fontFamily: 'quicksand-bold',
        fontSize: 16,
        lineHeight: 20,
        marginTop: 10,
        // marginRight: 82,
        marginBottom: 8,
    },
    year: {
        marginLeft: 8,
        fontSize: 16,
        color: 'gray',
    },
    length: {
        marginLeft: 8,
        fontSize: 16,
        color: 'gray',
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
        color: '#000',
        backgroundColor: '#E5E5E5',
        width: 'auto',
        // padding: 6,
        paddingTop: 4,
        paddingRight: 8,
        paddingLeft: 8,
        paddingBottom: 6,
        marginRight: 13,
        borderRadius: 20,
    }  
});

export default MovieList;