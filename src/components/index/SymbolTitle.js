import { StyleSheet, View } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function SymbolTitle({symbolIcon}) {
    return(
        <View>
            <MaterialIcons name={symbolIcon} size={40} color="black" />
        </View>
    );
};

