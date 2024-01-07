import { Button, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import CategorieForm from '../components/home/CategorieList';
import CategorieTitle from '../components/home/CategorieTitle';
import CategorieList from '../components/home/CategorieList';
import ProductCard from '../components/home/ProductCard';
import ProductData from '../datas/ProductData';
import ProductBanner from '../components/home/ProductBanner';


export default function CategorieDetail(){
    const products = ProductData;
    const bannerImage2 = require('../../assets/images/sweaterBanner3.jpg');
    const myItemSeparator = () => {
        return <View style={{ height: 1, backgroundColor: "#ff0303",marginHorizontal:10}} />;
    };


    return(
        <View  style={styles.container}  >
            <View style={styles.page}>
                
                <ProductBanner bgBbanner={bannerImage2} bannerTitle="Style d'été" bannerSubTitle="Procurez vous de notre collection de vêtements d'été" bannerLink="Voir le shop" />

                <CategorieTitle titleCategorie='Top Brand' />
                <View style={styles.blocCat} >
                    <FlatList
                        style={{ gap: '1rem'}}
                        horizontal='true'
                        data={products}
                        renderItem={({item}) => 
                            <CategorieList 
                                textCategorie={item.textCategorie}
                                imageCategorie={item.productImage} 
                                detailCategorie={item.detailCategorie}
                            />}
                        keyExtractor={item => item.productId}
                        ItemSeparatorComponent={myItemSeparator}
                    />
               
                </View>

                <CategorieTitle titleCategorie='Recommandations' />
                <View>
                    <FlatList
                        numColumns='2'
                        columnWrapperStyle={{gap: '0.2rem'}}
                        data={products}
                        renderItem={({item}) => 
                            <ProductCard 
                                productName={item.productName}
                                productImage={item.productImage}
                                productPrice={item.productPrice}
                                productQuantity={item.productQuantity}
                            /> }
                        keyExtractor={item => item.productId}
                    /> 
                </View>                

            </View>
        </View>
    );
};

const styles = StyleSheet.create({ 
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        color: '#222',
        paddingHorizontal: '1rem',
        paddingVertical: '1.5rem',
        width: 395,
      },
    page:{
        backgroundColor: '#fff',
        margin:0,
        height: 'auto',
    },
    blocCat: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '1rem',
        height: 'auto', 
    },
    productCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '13rem',
        width: '12rem',
        padding: '1.5rem',
    },
   
});
