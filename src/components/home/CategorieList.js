import { StyleSheet, Text, View, Image } from 'react-native';


export default function CategorieList({textList, textCategorie, imageCategorie, detailCategorie}){
    return(
        <View style={{display:'flex', flexDirection:'column', gap:'0.4rem', alignItems:'center', justifyContent:'center' }} >
            <Text style={{backgroundColor: '#eceaea', borderRadius: '5rem', padding: 6, color:'#13141d', marginLeft: 10, borderColor: '#13141d'}}> {textList} </Text>
            { imageCategorie ?
                <>
                    <Image 
                        style={styles.imgCat}
                        source={imageCategorie}
                    />
                    <Text>{textCategorie}</Text>
                    <Text style={{color: '#ff0303', fontSize:'0.8rem'}}>{detailCategorie}</Text>
                </>
                :null
            }

        </View>
    );
}


const styles = StyleSheet.create({
    imgCat: {
      width: '3rem',
      height: '3rem',
      borderRadius: '13rem',

    },
})