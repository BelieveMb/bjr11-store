import { Image, View, StyleSheet, Button } from "react-native";
import SignBtn from "../components/home/signBtn";
import ConnexionBtn from "../components/home/ConnexionBtn";
import BottomInfo from "../components/home/BottomInfo";



export default function SignIn({navigation}) {
    const imgSign = require('../../assets/images/signImg.png')
  return(
    <View>
        <Image source={imgSign} style={styles.signImg} />
        <View style={styles.signin} >
            <span style={styles.signTitle} >Bjr 11 Store</span>
            <span>
                What fI suspect is occurring is you  and ran.
            </span>
            <View style={styles.signBtns}>
                <ConnexionBtn navigation={navigation} btnText='Continue with Email' linkTo='SignInConnexion' />
                <ConnexionBtn navigation={navigation} btnText='Continue with Google'  linkTo='SignInConnexion' />
                <ConnexionBtn navigation={navigation} btnText='Continue with Apple'  linkTo='SignInConnexion' />
            </View>

            <BottomInfo textBottom="Already have an account" linkTo='register' textLink='Sign In' />
        </View>
        


    </View>
  );
};

const styles = StyleSheet.create({
    signImg:{
        width: 390,
        height: 280,
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
        gap: 6,
        marginVertical: 15,
    },

  
});