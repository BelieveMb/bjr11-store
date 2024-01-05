import  { Button, StyleSheet } from 'react-native';

export default function BottomInfo({navigation, linkTo, textLink, textBottom}){
    return(
        <p style={styles.bottomInfo}> {textBottom} <span style={styles.linkBtn} onClick={() =>navigation.navigate({linkTo})}> {textLink} </span> </p>

    );
}

const styles = StyleSheet.create({
    linkBtn:{
        color: '#ff0303',
        fontWeight: 700,
    },
    bottomInfo:{
        textAlign: 'center',
        marginTop: '2rem',
        fontSize: "1.4rem",
    },

});