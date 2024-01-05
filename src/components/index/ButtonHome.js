import { StyleSheet, Pressable, Text  } from 'react-native';


export default function ButtonHome({navigation, textBtn}){
    return(
        <Pressable style={styles.btnCard} >
            <Text style={{color: '#eceaea',fontSize: 22,textAlign: 'center'}} >{textBtn}</Text>
        </Pressable>
        
    )
};

const styles = StyleSheet.create({ 
    btnCard: {
        backgroundColor: '#010422',
        borderRadius: 18,
        borderWidth: 2,
        padding: 12,
        fontFamily: 'Arial',
        width: 320,
        
    },
});