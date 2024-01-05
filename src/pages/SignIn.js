import { Image, View, StyleSheet, Button } from "react-native";
import ConnexionBtn from "../components/index/ConnexionBtn";
import ButtonHome from "../components/index/ButtonHome";
import BottomInfo from "../components/index/BottomInfo";



export default function SignIn({navigation}) {
    const imgSign = require('../../assets/images/bg-index1.avif');

    
    return(
    <View>
        <Image source={imgSign} style={styles.signImg} />
        <View style={styles.signin} >
            <span style={styles.signTitle} >Bjr 11 Store</span>
            <span> Où chaque achat devient une expérience incroyable</span>
            <View style={styles.signBtns}>
                <ConnexionBtn btnText="Continuer avec Email" matIcon="mail" />
                <ConnexionBtn btnText="Continuer avec Google" btnIcon="google-plus" />
                <ConnexionBtn btnText="Continuer avec Apple" btnIcon="apple" />                
            </View>

            <BottomInfo  textBottom="Already have an account" linkTo='register' textLink='Sign In'/>
        </View>
        


    </View>
  );
};

const styles = StyleSheet.create({
    signImg:{
        width: 390,
        height: 320,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        borderWidth: 2,
        borderColor: '#011',
        borderStyle: 'solid',
        marginBottom: 4,
    },
    signin:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignContent: 'center',
        gap: 1,
        paddingHorizontal: 10,
        width: 390,
    },
    signTitle:{
        fontWeight: 800,
        fontSize: 40,
        marginBottom: 0,
        color: '#010422',
    },
    signBtns:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        marginVertical: "1.5rem",
    },

  
});