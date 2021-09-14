import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Comic from '../../components/Comic';
import Header from '../../components/Header';
import api from '../../services/api';
import styles from './styles';

const Comics = ( {navigation} ) => {

  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    loadApi()
  }, [])

  async function loadApi() {
    if(loading) return;
    setLoading(true);

    const response = await api.get('/comics', { params: { limit: 20, offset: scroll} });

    setComics([...comics, ...response.data.data.results]);
    
    setScroll(scroll+20);
    setLoading(false);

  }

  return(
    <View style={{flex: 1}}>
    <StatusBar backgroundColor="#101040"/>
    <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.container}>
      <Header/>
      <FlatList
        numColumns={2}
        style={styles.flatList}
        contentContainerStyle={{ alignItems: 'center'}}
        data={comics}
        keyExtractor={ item => String(item.id)}
        renderItem={ ({item}) => <Comic navigation={navigation} data={item} />}
        onEndReached={loadApi}
        onEndReachedThreshold={0.2}
        ListFooterComponent={<Loading load={loading}/>}
      />
    </View>
    </SafeAreaView>
    </View>
  );
}

const Loading = ({ load }) => {
  if(!load) return null;
  return(
    <View style={{paddingBottom: 25}}>
      <ActivityIndicator size={25} color="#fff"/>
    </View>
  );
}

export default Comics;