import { View, StyleSheet, Text } from "react-native";
import SignInput from "../components/index/SignInput";
import ConnexionBtn from "../components/index/ConnexionBtn";
import FormHomeBottomButtons from "../components/index/FormHomeBottomButtons";
import FormHomeTitle from "../components/index/FormHomeTitle";

export default function NewPassword(){
  return(
    <View style={styles.signIn} >
        <FormHomeTitle titleText="New Password !" subTitle='Choisissez le premier ur-i dans le tableau.' />

        <SignInput  placeholder="Votre nom complet"  />
        <Text> Choisissez le premier ur-i dans le tableau. Choisissez le premier ur-i dans le tableau.</Text>
        <SignInput  placeholder="Believe@gmail.com "  />
       
        <View style={{marginTop: '12rem'}}>
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
})