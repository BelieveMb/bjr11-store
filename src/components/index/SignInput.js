import { Image, View, StyleSheet, TextInput } from "react-native";


export default function SignInput({placeholder, myStyle, editable}){
    return(
        <View style={styles.signBtn}>
            <b>♥</b>
            <TextInput 
                placeholder={placeholder}
                editable={editable}                
            >
            </TextInput>
        </View>
        

    );
}

const styles = StyleSheet.create({
    signBtn:{
        // backgroundColor: '#fff',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex',
        gap: 8,
        padding: 10,
        width: 320,
        marginBottom: 10,
        fontSize: '1.2rem',        
    }
});