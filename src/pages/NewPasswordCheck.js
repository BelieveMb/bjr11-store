import { View, StyleSheet, Text, Image } from "react-native";
import ConnexionBtn from "../components/index/ConnexionBtn";
import FormHomeTitle from "../components/index/FormHomeTitle";

export default function NewPasswordCheck(){
  const imgPassword = require('../../assets/images/cardImg2.jpg');
  return(
    <View style={styles.signIn} >

        <Image source={imgPassword} style={styles.imgPassword} />
        <View style={{display: 'flex', flexDirection: 'column', gap: '0.7rem', alignItems: 'center'}}>
            <FormHomeTitle titleText='Password Update' />
            <Text style={{textAlign: 'center', paddingHorizontal: '3rem'}} > Choisissez le premier ur-i dans le tableau, le premier ur-i .</Text>
        </View>
       
        <View style={{marginTop: '20rem',}}>
            <Text style={{ marginBottom: '2rem', textAlign: 'center'}}> Choisissez le premier ur-i dans le tableau. </Text>
          <ConnexionBtn btnText='Continue' linkTo='Home' btnColor="#010422" />
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
      gap: 20,
  },
  imgPassword:{
    width: '5rem',
    borderColor: '#025',

  }
})