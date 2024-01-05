import { StyleSheet, Button } from 'react-native';


export default function ButtonHome({navigation}){
    return(
        <Button 
            title='Get Started'
            color='#010422'
            onPress={() =>navigation.navigate('SignIn')}            
        />
    )
};

const styles = StyleSheet.create({ 
    btnCard: {
        backgroundColor: '#010422',
        color: '#eceaea',
        borderRadius: 18,
        borderWidth: 2,
        padding: 12,
        fontSize: 17,
        fontFamily: 'Arial',
        width: 320,
    },
});