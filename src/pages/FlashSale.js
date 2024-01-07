import { View } from 'react-native'
import ProductBanner from '../components/home/ProductBanner';

const bannerShoes = require('../../assets/images/shoes.jpg');

export default function FlashSale() {
    return(
        <View style={styles.container}>
            <ProductBanner bgBbanner={bannerShoes} bannerTitle="Full Color Holdie" bannerSubTitle="RN  provides a suite" bannerButton="Get in Now" />

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
})