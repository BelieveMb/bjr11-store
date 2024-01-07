import { View, StyleSheet, Text, Pressable, FlatList } from 'react-native';
import HomeStyles from '../styles/homeStyle';
import SignInput from '../components/index/SignInput';
import ProductData from '../datas/ProductData';
import ArticleCard from '../components/home/ArticleCard';
import CategorieTitle from '../components/home/CategorieTitle';

export default function Search() {
    const products = ProductData;

    return(
        <View style={HomeStyles.container}>
            <SignInput inputIcon="search" inputIcon2="close" />
            <CategorieTitle titleCategorie='Produits' />
            <FlatList
                style={{ gap: '1rem'}}
                data={products}
                renderItem={({item}) => 
                    <ArticleCard
                        articleImage={item.productImage}
                        articleName={item.productName}
                        articleQuantity={item.productQuantity}
                        articlePrice={item.productPrice}
                        checkButton="icon"
                />}
                keyExtractor={item => item.productId}
                // ItemSeparatorComponent={myItemSeparator}
            />

        </View>
    )
}

