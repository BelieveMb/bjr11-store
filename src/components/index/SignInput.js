import { Image, View, StyleSheet, TextInput } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';


export default function SignInput({placeholder, hidden, editable, value, inputIcon, inputIcon2}){
    return(
        <View style={styles.signBtn}>
            <MaterialIcons name={inputIcon} size={24} color="black" />
            <TextInput 
                placeholder={placeholder}
                editable={{editable}}
                value={value}
                style={{fontSize:'1.5rem'}}
            >
            </TextInput>
            <MaterialIcons name={inputIcon2} size={24} color="black" />
        </View>
        

    );
}

const styles = StyleSheet.create({
    signBtn:{
        backgroundColor: '#eceaea',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 340,
        marginBottom: 5,
        fontSize: '1.8rem',        
    }
});