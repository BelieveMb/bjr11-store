import { View, StyleSheet, Text, Image } from "react-native";
import ConnexionBtn from "../components/index/ConnexionBtn";
import FormHomeTitle from "../components/index/FormHomeTitle";
import SymbolTitle from "../components/index/SymbolTitle";
import ButtonHome from "../components/index/ButtonHome";

export default function NewPasswordCheck(){
  const imgPassword = require('../../assets/images/lock.jpg');
  return(
    <View style={styles.signIn} >
        <SymbolTitle symbolIcon="close" />
        <View style={styles.blockImg}>
          <Image source={imgPassword} style={styles.imgPassword} />
        </View>
        
        <View style={styles.titlePassword}>
            <Text style={styles.passwordTitle} >Password Update</Text>
            <Text style={{textAlign: 'center', paddingHorizontal: '3rem'}} > Choisissez le premier ur-i dans le tableau, le premier ur-i .</Text>
        </View>
       
        <View style={{marginTop: '5rem',}}>
            <Text style={{ marginBottom: '1rem', textAlign: 'center'}}> Choisissez le premier ur-i dans le tableau. </Text>
            <ButtonHome textBtn='Se connecter' />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signIn:{
      paddingHorizontal: 25,
      paddingVertical: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
  },
  passwordTitle:{
    fontWeight: 600,
    fontSize: 40,
    marginBottom: 2,
    marginTop: 2,
    color: '#010422',
  },
  blockImg:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20rem',
    height: '18rem',
    marginTop: '1rem',
  },
  imgPassword:{
    width: '18rem',
    height: '16rem',
    borderColor: '#025',
  },
  titlePassword: {
    display: 'flex',
    flexDirection: 'column', 
    gap: '0.7rem',
    alignItems: 'center',
    width: '20rem',
  },
})