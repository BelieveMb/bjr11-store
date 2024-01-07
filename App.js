import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { TailwindFn } from 'tailwind-react-native-classnames';
// import tailwind from 'tailwind-react-native-classnames';
import Index from './src/pages/Index';
// import { NavigationContainer } from '@react-navigation/native';
import SignInConnexion from './src/pages/SignInConnexion';
import Register from './src/pages/Register';
import NewPassword from './src/pages/NewPassword';
import NewPasswordCheck from './src/pages/NewPasswordCheck';
import HomePage from './src/pages/HomePage';
import SignIn from './src/pages/SignIn';
import FlashSale from './src/pages/FlashSale';


// const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <FlashSale />
    // <NavigationContainer >
    //   <Stack.Navigator>
    //         <Stack.Screen 
    //           name="Home"
    //           component={HomePage}
    //           options={{
    //              title: 'Bjr 11 Store',
    //               headerStyle: {
    //                 backgroundColor: '#eceaea',
    //               },
    //               headerTintColor: '#000',
    //               headerTitleStyle: {
    //                 fontWeight: 'bold',
    //               },
    //             }}
             
    //         />
    //         <Stack.Screen 
    //           name='SignInConnexion'
    //           component={SignInConnexion}
    //           options={{ title: 'SignUp Page'}}
    //         />
    //         <Stack.Screen 
    //           name='SignIn'
    //           component={SignInConnexion}
    //           options={{ title: 'Sign In'}}
    //         />
    //         {/* <StatusBar style="auto" /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cacheBar: {
    backgroundColor: '#000',
    color: "#eceaea",
  },
});
