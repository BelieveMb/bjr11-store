import { View, StyleSheet, FlatList, Text, ImageBackground, Pressable } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import ProductBanner from '../components/home/ProductBanner';
import CategorieTitle from '../components/home/CategorieTitle';
import CategorieList from '../components/home/CategorieList';
import ProductData from '../datas/ProductData';
import ProductCard from '../components/home/ProductCard';
import ButtonHome from '../components/index/ButtonHome';
import HomeStyles from '../styles/homeStyle';

const bannerShoes = require('../../assets/images/shoes.jpg');
const productImage = require('../../assets/images/cloths/sweater.jpg');

export default function FlashSale() {
    const products = ProductData;

    return(
        <View style={HomeStyles.container}>
            <ProductBanner bgBbanner={bannerShoes} bannerTitle="Flash Sale" bannerSubTitle="RN  provides a suite" bannerButton="Get in Now" />
            <CategorieTitle titleCategorie='Nos articles'  />
            <View style={HomeStyles.blocCat} >
                    <FlatList
                        style={{ gap: '1rem'}}
                        horizontal='true'
                        data={products}
                        renderItem={({item}) => 
                            <CategorieList 
                                textList={item.textCategorie}
                            />}
                        keyExtractor={item => item.productId}
                    />
               
            </View>

            <View style={{display: 'flex', flexDirection: 'row', gap:8, width: 200, marginVertical: '1.2rem'}}>
                <ImageBackground style={HomeStyles.productCard} imageStyle={{ borderRadius: '1.6rem'}} source={productImage} resizeMode='cover' >
                    <Text style={{backgroundColor: '#ff0303', color: '#fff', padding:'0.2rem', borderRadius: '0.5rem', width: 'auto', height: '1.5rem'}}>
                        New
                    </Text>                     
               </ImageBackground>
                <View>
                    <Text style={{fontSize:'2rem', marginBottom: '2rem'}} >Hoddie Green</Text>
                    <View style={{display: 'flex', flexDirection: 'row', gap:8, alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Text style={{fontSize: "1rem", marginBottom:'0.2rem'  }}>Qté. 10</Text>
                            <Text style={{fontSize: "1.4rem", color:'#ff0303', fontWeight: '600' }}>$59.00</Text>
                        </View>
                        <Pressable style={HomeStyles.btnCard}  >
                            <MaterialIcons name='shopping-cart' size={24} color="#eceaea" />

                            <Text style={{color: '#eceaea',fontSize: 15,textAlign: 'center'}} >Acheter</Text>
                        </Pressable>
                    </View>
                </View>
            </View>


        </View>
    );
};

