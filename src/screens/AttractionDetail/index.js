import React from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title'
import styles from './styles'
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';

const All = 'All';

const AttractionDetail = ({navigation, route}) => {
    const { item } = route?.params || {};
    const onBack = () => {
        navigation.goBack()
    }
    return(
    <SafeAreaView style={styles.container}>   
        <Text onPress={onBack} style={{margin:35}}>BACK</Text>         
       <Text>{item?.name}</Text>
    </SafeAreaView>
    );

};

export default React.memo(AttractionDetail);