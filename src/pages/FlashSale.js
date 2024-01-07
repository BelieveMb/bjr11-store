import { View, StyleSheet, FlatList, Text, ImageBackground, Pressable } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import HomeStyles from '../styles/homeStyle';
import ProductBanner from '../components/home/ProductBanner';
import CategorieTitle from '../components/home/CategorieTitle';
import CategorieList from '../components/home/CategorieList';
import ProductData from '../datas/ProductData';
import ProductCard from '../components/home/ProductCard';
import ButtonHome from '../components/index/ButtonHome';
import ArticleCard from '../components/home/ArticleCard';

const bannerShoes = require('../../assets/images/shoes.jpg');

export default function FlashSale() {
    const products = ProductData;

    return(
        <View style={HomeStyles.container}>
            <ProductBanner bgBbanner={bannerShoes} bannerTitle="Flash Sale" bannerSubTitle="RN  provides a suite" bannerButton="24-15 jan" />
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

            <FlatList
                style={{ gap: '1rem'}}
                data={products}
                renderItem={({item}) => 
                    <ArticleCard mode="New"
                        articleImage={item.productImage}
                        articleName={item.productName}
                        articleQuantity={item.productQuantity}
                        articlePrice={item.productPrice}
                />}
                keyExtractor={item => item.productId}
                // ItemSeparatorComponent={myItemSeparator}
            />

           

           


        </View>
    );
};

