import {  StyleSheet, Text } from "react-native";

export default function FormHomeLogo() {
    
    return(
        <Text style={styles.logo}>B</Text>
    );
};


const styles = StyleSheet.create({
    logo:{
        backgroundColor: '#ff0303',
        color: '#eceaea',
        width: 25,
        borderRadius: '100%',
        fontWeight: 700,
        padding: '1rem',
        fontSize: '2rem',
        textAlign: 'center',
    },
});
