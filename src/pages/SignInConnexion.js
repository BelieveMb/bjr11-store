import { View, StyleSheet } from "react-native";
import SignInput from "../components/index/SignInput";
import ConnexionBtn from "../components/index/ConnexionBtn";
import FormHomeBottomButtons from "../components/index/FormHomeBottomButtons";
import FormHomeTitle from "../components/index/FormHomeTitle";
import FormHomeLogo from "../components/index/FormHomeLogo";
import ButtonHome from "../components/index/ButtonHome";

export default function SignInConnexion() {

    return(
        <View style={styles.signIn} >
            <FormHomeLogo />

            <FormHomeTitle titleText="Welcome back !" subTitle='Choisissez le premier ur-i dans le tableau.' />

            <SignInput  value="believe@gmail.com"  hidden="false" inputIcon="mail" editable="false" />
            <SignInput placeholder='☻☻☻☻☻☻☻☻☻☻☻' hidden="true" editable="true" />
           
            <View style={styles.blocMdp}>
                <span style={styles.mdpForgot} >Password forgot</span>
            </View>
            <ButtonHome textBtn="Sign in" />
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
    signInTitle:{
        fontWeight: 800,
        fontSize: 40,
        marginBottom: 0,
        marginTop: 10,
        color: '#010422',
    },
    signInSubTitle:{
        fontWeight: 600,
        marginTop: 1,
    },
    titles:{
        lineHeight: 30,
    },
    blocMdp:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: 320,
    },
    mdpForgot:{
        color: '#ff0303',
    },
    signInBtn:{
        backgroundColor: '#13141d',
        color: '#eceaea',
        textAlign: 'center',
    },
    connexionBloc:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between', 
        gap: 10, 

    },
});
