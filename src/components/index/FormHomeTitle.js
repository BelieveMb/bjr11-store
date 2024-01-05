import { View, StyleSheet } from "react-native";

export default function FormHomeTitle({titleText, subTitle}) {
    return(
        <View style={styles.titles}>
            <span style={styles.signInTitle}> {titleText} </span>
            <span style={styles.signInSubTitle} > {subTitle} </span>
        </View>
    );
} 

const styles = StyleSheet.create({
    titles:{
        lineHeight: 30,
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

});