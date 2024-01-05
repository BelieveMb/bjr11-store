import { StyleSheet, Text, View } from 'react-native';


export default function CategorieTitle({titleCategorie}){

    return(
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between', marginVertical: '1rem'}}>
            <Text style={{fontWeight: 700, fontSize: '1.2rem'}} >{titleCategorie}</Text>
            <Text style={{color: '#7e7a7a' }} >See All</Text>
            
        </View>
    );
}


const styles = StyleSheet.create({
    
})