import  { Pressable, Text, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';


export default function ConnexionBtn({navigation, btnText, btnIcon, matIcon, btnStyle, linkTo}){
  return(
    
    <Pressable style={styles.connexionBtn} >
          <MaterialIcons name={matIcon} size={24} color="black" />
          <FontAwesome name={btnIcon} size={24} color="black" />
         <Text style={{color: '#010422',fontSize: 18,textAlign: 'center'}} >{btnText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    connexionBtn:{
        // backgroundColor: '#eceaea',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 30,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontWeight: 800,
        gap: 8,
        padding: 10,
        width: 320,
        marginBottom: 10,
        
    }
});
