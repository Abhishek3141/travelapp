import React, { useEffect, useState} from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title'
import styles from './styles'
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';
import { useNavigation } from '@react-navigation/native';
 

const All = 'All';

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(All)
  const [data,setData] = useState([]);
  useEffect(()=>{
    setData(jsonData);
  },[])

  useEffect(()=>{
    if(selectedCategory ===All){
      setData(jsonData)
    }else{
        const filteredData = jsonData?.filter(item => item?.categories?.includes(selectedCategory))
        setData(filteredData)
    }

  },[selectedCategory])
  return (
    <SafeAreaView style={styles.container}>            
          <FlatList
            data={data}
            numColumns={2}
            style={{flexGrow:1}}
            ListEmptyComponent={(<Text style={styles.emptyText}>No Items Found</Text>)}
            ListHeaderComponent={(
              <>
              <View style={{margin:0}}>
              <Title text = "Where do" style={{fontWeight: 'normal'}}/>
              <Title text = "you want to go"/>
              <Title text = "Explore Attractions" style={styles.subtitle}/>
              </View>
              <Categories 
              selectedCategory ={selectedCategory} 
              onCategoryPress={setSelectedCategory} 
              categories={[All,...categories]}></Categories>
              </>
            )}
            keyExtractor={item => String(item?.id)}
            renderItem={({item,index})=>(
              <AttractionCard 
                key={item.id}
                style={index%2 ===0 ? {marginRight:28,marginLeft:0} : {marginRight:32}}
                onPress={()=> navigation.navigate("AttractionDetail", {item})}
                title={item.name}
                subtitle={item.city}
                imageSrc={item.images?.length ? item.images[0] : null}/>
            )}
          
          />
    </SafeAreaView>
   
  );
};

export default React.memo(Home);