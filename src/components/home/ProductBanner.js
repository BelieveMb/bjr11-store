import  { View, StyleSheet, ImageBackground, Text, TouchableHighlight } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';


export default function ProductBanner({bgBbanner, bannerTitle, bannerSubTitle, bannerButton, bannerLink}) {
    return(
        <View>
            <ImageBackground style={styles.banner} imageStyle={{ borderRadius: '1.6rem'}} source={bgBbanner} resizeMode='cover' >
                <Text style={{fontSize: '2rem', fontWeight: 600}} > {bannerTitle} </Text>
                <Text style={{fontSize: '1rem', color: "#ff0303", width: "50%"}} > {bannerSubTitle} </Text>
                <View style={{width: '60%', marginTop:'2.5rem'}}>
                 {bannerButton ?
                   <TouchableHighlight 
                        style={{ 
                            backgroundColor: '#ff0303',
                            borderRadius:10,
                            justifyContent: 'center', 
                            alignItems:'center',
                            paddingVertical: '0.4rem',
                            fontWeight: 700
                            }}
                    >
                        <Text>{bannerButton}</Text>
                    </TouchableHighlight>
                   :<Text style={{color:'#13141d', display: 'flex', flexDirection:'row', gap: 14, justifyContent: 'center', fontSize: '1.2rem'}}>
                        {bannerLink} 
                        <FontAwesome name='arrow-right' size={25} />
                    </Text>   
                } 
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    banner:{
        display: 'flex',
        flexDirection: 'column',
        height: '13rem',
        width: '100%',
        padding: '1.5rem',
        marginVertical: '2rem',
        borderColor: '#13141d',
        borderWidth: 2,
        borderRadius: '2rem',
    },
})