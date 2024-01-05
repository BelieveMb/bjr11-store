import {  StyleSheet, Image } from "react-native";

export default function FormHomeLogo() {
    const logo = require('../../../assets/images/logo.png');
    return(
        <Image source={logo} style={styles.logo} />
    );
};


const styles = StyleSheet.create({
    logo:{
        width: 90,
        height: 60,
        borderRadius: '4%',
    },
});
