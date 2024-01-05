import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ mode, productImage, productName, productPrice, productQuantity}){
  return(
        <View style={{flexDirection:'column', width:'12rem'}} >
            <ImageBackground style={styles.productCard} imageStyle={{ borderRadius: '1.6rem'}} source={productImage} resizeMode='cover' >
                {
                    mode === ""
                    ?<Text style={{backgroundColor: '#ff0303', color: '#fff', padding:'0.2rem', borderRadius: '0.5rem', width: 'auto', height: '1.5rem'}}>
                        {mode}
                    </Text> : null
                }
                
                <svg style={{ width:'1.7rem'}}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </ImageBackground>
            <View style={{flexDirection:'column', marginVertical:'0.7rem'}} >
                <Text style={{fontWeight:600, fontSize:'1.1rem', marginVertical:'0.6rem'}}>{productName} </Text>
                <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row'} } >
                    <b>${productPrice} </b>
                    <span style={{color: "#7e7a7a"}}>Qté. {productQuantity} </span>
                </View>
            </View>
            
        </View>
  )
};
const styles = StyleSheet.create({ 

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
