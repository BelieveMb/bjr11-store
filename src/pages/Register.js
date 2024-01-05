import { View, StyleSheet, Text } from "react-native";
import SignInput from "../components/index/SignInput";
import ConnexionBtn from "../components/index/ConnexionBtn";
import FormHomeBottomButtons from "../components/index/FormHomeBottomButtons";
import FormHomeTitle from "../components/index/FormHomeTitle";

export default function Register(){
  return(
    <View style={styles.signIn} >
        <FormHomeTitle titleText="Welcome !" subTitle='Choisissez le premier ur-i dans le tableau.' />

        <SignInput  placeholder="Votre nom complet"  />
        <SignInput  placeholder="Votre mail "  />
        <SignInput placeholder='☻☻☻☻☻☻☻☻☻☻☻' />
       
        <ConnexionBtn btnText='Sign in' linkTo='Home' btnColor="#010422" />
        <FormHomeBottomButtons />
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