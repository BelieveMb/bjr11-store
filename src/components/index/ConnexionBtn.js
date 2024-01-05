import  { Button, StyleSheet } from 'react-native';

export default function ConnexionBtn({navigation, btnText, btnColor, linkTo}){
  return(
    <Button
            title={btnText}
            color={btnColor}
            onPress={() =>navigation.navigate({linkTo})}
    />
  );
};

const styles = StyleSheet.create({
    signBtn:{
        backgroundColor: '#eceaea',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 800,
        gap: 8,
        padding: 16,
        width: 320,
        marginBottom: 10,
        
    }
});
