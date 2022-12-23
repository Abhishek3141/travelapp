import React from 'react';
import { FlatList, SafeAreaView, View, Text , Image,Pressable} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title'
import styles from './styles'
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

const All = 'All';

const Gallery = ({route,navigation}) => {
    const{images} = route?.params || {};
    const onBack = () => {
        navigation.goBack()
    }
    return(
        <SafeAreaView style={styles.container}>         
            <FlatList style={{paddingHorizontal:32,marginBottom:24}}data={images} renderItem={({item})=>(
                <Image source={{uri:item}} style={styles.image}/>
    )}/>   

        <Pressable onPress={onBack} style={styles.backContainer}>
                    <Image style = {styles.backIcon} source={require('../../assets/back.png')}/>
        </Pressable>
        </SafeAreaView>
    );
   
   

};

export default React.memo(Gallery);