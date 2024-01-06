import { View, StyleSheet, Text } from "react-native";
import SignInput from "../components/index/SignInput";
import ConnexionBtn from "../components/index/ConnexionBtn";
import FormHomeBottomButtons from "../components/index/FormHomeBottomButtons";
import FormHomeTitle from "../components/index/FormHomeTitle";
import SymbolTitle from "../components/index/SymbolTitle";
import ButtonHome from "../components/index/ButtonHome";

export default function NewPassword(){
  return(
    <View style={styles.signIn} >
        <SymbolTitle symbolIconFont="arrow-left" />
        <FormHomeTitle titleText="Nouveau Password" subTitle='Choisissez le premier ur-i dans le tableau.' />

        <SignInput  placeholder="☻☻☻☻☻☻☻☻☻☻" inputIcon="lock" />
        <Text style={{width:'18rem'}}> Choisissez le mot de passe pour votre compte, et confirmez.</Text>
        <SignInput  placeholder=" votre mot de passe " inputIcon="lock"  />
       
        <View style={{marginTop: '12rem'}}>
          <ButtonHome textBtn="Continue" />
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
      gap: 10,
  },
})