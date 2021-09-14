import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Comic = ({ data, navigation }) => {

  const numCharacters = data.title.length;

  return(
    <TouchableOpacity style={styles.comic} onPress={ 
      () => navigation.navigate('ComicPage', {
        imagePath: data.thumbnail.path, 
        imageExtension: data.thumbnail.extension,
        comicTitle: data.title,
        comicPrice: data.prices.map(item => item.price),
        comicType: data.prices.map(item => item.type),
        comicDescription: data.description,
        comicVariantDescription: data.variantDescription,
        })}
    >
      <View>
        <Text numberOfLines={2} style={numCharacters > 31 ? styles.mediumTitle : styles.smallTitle}>{data.title}</Text>
      </View>
      <Image style={styles.comicCover} 
        source={ 
            data.thumbnail.path!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" 
            ? {uri: `${data.thumbnail.path}.${data.thumbnail.extension}`} 
            : require('../../assets/marvel.jpg')}  
      />
      <View style={styles.priceBox}>
        <Text style={styles.priceText}>{data.prices.map(item => item.price) == 0 ? "Grátis" : data.prices.map(item => "  U$"+item.price)}</Text>
        <Text style={styles.priceType}>{data.prices.map(item => item.type) == "printPrice" ? "Comic Impressa" : "Comic Digital"}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Comic;