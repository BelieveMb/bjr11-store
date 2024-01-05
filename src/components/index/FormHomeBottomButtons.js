import { View, StyleSheet, Text } from "react-native";
import BottomInfo from "./BottomInfo";
import ConnexionBtn from "./ConnexionBtn";

export default function FormHomeBottomButtons() {
    return(
        <>
            <Text style={{textAlign:'center'}}> or Sign in with :</Text>
            <View style={ styles.connexionBloc}>
                <ConnexionBtn btnText='Google' linkTo='Home' btnColor='#ff1'  />
                <ConnexionBtn btnText='Apple' linkTo='Home' btnColor='#520' />
            </View>
            <BottomInfo textBottom="Don't have an account ?" textLink="Sign Up" linkTo="Register" />

        </>
    );
}

const styles = StyleSheet.create({
    connexionBloc:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between', 
        gap: 10, 
        width: 320,
    },
})