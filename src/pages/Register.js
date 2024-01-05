import { View, StyleSheet, Text } from "react-native";
import SignInput from "../components/index/SignInput";
import ConnexionBtn from "../components/index/ConnexionBtn";
import FormHomeBottomButtons from "../components/index/FormHomeBottomButtons";
import FormHomeTitle from "../components/index/FormHomeTitle";
import ButtonHome from "../components/index/ButtonHome";
import SymbolTitle from "../components/index/SymbolTitle";

export default function Register(){
  return(
    <View style={styles.signIn} >
        <SymbolTitle symbolIcon="close" />
        <FormHomeTitle titleText="Welcome !" subTitle='Choisissez le premier ur-i dans le tableau.' />

        <SignInput  placeholder="Votre nom complet"  inputIcon="person"   />
        <SignInput  placeholder="Votre mail " inputIcon="mail" />
        <SignInput placeholder='☻☻☻☻☻☻☻☻☻☻☻' inputIcon="lock"/>
       
        <ButtonHome textBtn="Sign Up" />
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