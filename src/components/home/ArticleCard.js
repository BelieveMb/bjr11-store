import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import HomeStyles from '../../styles/homeStyle';


export default function ArticleCard({mode, articleImage, articleName, articleQuantity, articlePrice}){
    return( 
        <View style={{display: 'flex', flexDirection: 'row', gap:8, width: 200, marginVertical: '1.2rem'}}>
        <ImageBackground style={HomeStyles.productCard} imageStyle={{ borderRadius: '1.6rem'}} source={articleImage} resizeMode='cover' >
            <Text style={{backgroundColor: '#ff0303', color: '#fff', padding:'0.2rem', borderRadius: '0.5rem', width: 'auto', height: '1.5rem'}}>
                {mode}
            </Text>                     
       </ImageBackground>
        <View>
            <Text style={{fontSize:'1.8rem', marginBottom: '2rem', width: 180}} > {articleName.split("",12)} </Text>
            <View style={{display: 'flex', flexDirection: 'row', gap:8, alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{fontSize: "1rem", marginBottom:'0.2rem'  }}>Qté. {articleQuantity}</Text>
                    <Text style={{fontSize: "1.4rem", color:'#ff0303', fontWeight: '600' }}>${articlePrice}</Text>
                </View>
                <Pressable style={HomeStyles.btnCard}  >
                    <MaterialIcons name='shopping-cart' size={24} color="#eceaea" />
                    <Text style={{color: '#eceaea',fontSize: 15,textAlign: 'center'}} >Acheter</Text>
                </Pressable>
            </View>
        </View>
    </View>


    );
}
