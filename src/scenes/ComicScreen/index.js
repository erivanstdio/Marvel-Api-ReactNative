import React, {useState} from 'react';
import { 
  View, 
  Image, 
  Text, 
  TouchableOpacity, 
  StatusBar, 
  ScrollView } from 'react-native';
import Header from '../../components/Header';

import styles from './styles';

const ComicScreen = ({ route }) => {

  const { imagePath, imageExtension, comicTitle, comicPrice, comicType } = route.params;
  const numCharacters = comicTitle.length;

  const [counter, setCounter] = useState(0);
    

  function subtraction(){
    if(counter > 1){
      setCounter(counter-1)
    }
  }

  return(
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#101040"/>
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <View style={styles.comicInfo}>
          <Text style={ numCharacters > 54 ? styles.bigTitle : numCharacters > 31 && numCharacters < 55 ? styles.mediumTitle : styles.smallTitle } >{comicTitle}</Text>
          <Image style={styles.image} source={ 
              imagePath!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" 
              ? {uri: `${imagePath}.${imageExtension}`} 
              : require('../../assets/marvel.jpg')} 
          />
          <Text style={styles.type}>{comicType == "printPrice" ? "Comic Impressa" : "Comic Digital"}</Text>

          <View style={styles.counterBox}>
            <Text style={styles.quantityText}>Selecione {'\n'}a quantidade: </Text>
            <View style={styles.counter}>
              <TouchableOpacity style={styles.button} onPress={ () => subtraction() }>
                <Text style={{color: '#f0f0f0'}}>{'<'}</Text>
              </TouchableOpacity>
              <Text style={{paddingHorizontal: 10, color: 'white'}}>{counter}</Text>
              <TouchableOpacity style={styles.button} onPress={ () => setCounter(counter+1) }>
                <Text style={{color: '#f0f0f0'}}>{'>'}</Text>
              </TouchableOpacity>
            </View>  
          </View>

          <View style={styles.checkoutBox}>
            <Text style={styles.price}>{comicPrice == 0 ? "Grátis" : "U$ "+comicPrice}</Text>
            <TouchableOpacity style={styles.toStore}>
              <Text style={styles.toStoreText}>Adicionar {'\n'}ao Carrinho!</Text>
              <Image style={styles.checkoutCart} source={require('../../assets/shopping-cart.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
    </View>
  );
}




export default ComicScreen;