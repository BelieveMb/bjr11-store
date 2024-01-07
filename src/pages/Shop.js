import { View, StyleSheet, Text, Pressable } from 'react-native';
import HomeStyles from '../styles/homeStyle';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import ProductBanner from '../components/home/ProductBanner';
import CategorieTitle from '../components/home/CategorieTitle';

const ContentCategorie = ({textContent, iconContent, iconContentFont}) =>{
    return (
        <Pressable style={[HomeStyles.contentCat, styles.contentBg]}>
            <MaterialIcons name={iconContent} size={30} color="#13141d" />
            <FontAwesome name={iconContentFont} size={30} color="#13141d" />
            <Text>{textContent}</Text>
        </Pressable>
    )
}

export default function Shop() {
    const bannerImage = require('../../assets/images/bg-index3.jpg');

    return(
        <View style={HomeStyles.container}>
            <ProductBanner bgBbanner={bannerImage} bannerTitle="Shop x 50%" bannerSubTitle="save" bannerButton="Get in Now" />
            <CategorieTitle titleCategorie='Categories'  />
            <View style={HomeStyles.shopCard} >
                <ContentCategorie iconContentFont="automobile" textContent="Automobile" />
                <ContentCategorie iconContent="book" textContent="Book" />
                <ContentCategorie iconContentFont="gg-circle" textContent="Cosmetics" />
                <ContentCategorie iconContentFont="gg-circle" textContent="Cosmetics" />
                <ContentCategorie iconContentFont="gg-circle" textContent="Cosmetics" />
                <ContentCategorie iconContentFont="gg-circle" textContent="Cosmetics" />
                <ContentCategorie iconContentFont="gg-circle" textContent="Cosmetics" />
                <ContentCategorie iconContentFont="gg-circle" textContent="Cosmetics" />
                <ContentCategorie iconContentFont="gg-circle" textContent="Cosmetics" />
                <ContentCategorie iconContentFont="gg-circle" textContent="Cosmetics" />
            </View>


        </View>

    );
}
const styles = StyleSheet.create({
    contentBg:{
        backgroundColor: '#eceaea',
        borderWidth: '0.2rem',
        borderColor: '#13141d',
        borderRadius: '1rem',
        paddingVertical: '1.4rem',
        paddingHorizontal: '0.9rem',
        width: '6rem',
    }
})