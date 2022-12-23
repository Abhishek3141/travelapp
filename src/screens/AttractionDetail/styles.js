import { StyleSheet,Dimensions } from "react-native";

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        margin:32,
    },
    mainImage:{
        width: '100%',
        height: height / 2 -20,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    },
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon:{
        width: 30,
        height: 30,
        borderRadius:20,
        margin:15
    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'rgba(256,256,256,0.65)',
        margin:16,
        paddingHorizontal:8,



    },
    miniImage:{
        width: 40,
        height: 40,
        margin:8,
        borderRadius:10,


    },
    moreImages: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    moreImagesContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.38)',
        width: 40,
        height: 40,
        top: 8,
        left: 4,
        borderRadius: 10,
        marginLeft:4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical: 25

    },
    title:{
        color:'black'

    },
    city:{
        fontSize:20,
        fontWeight:'400',
        color: '#000',

    },

});

export default styles; 