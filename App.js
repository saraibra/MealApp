import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
enableScreens();
 const fetchFonts = ()=>{
  return Font.loadAsync({
     'open-sans':require('./assets/fonts/Opensans-regular.ttf'),
     'open-sans-bold':require('./assets/fonts/Opensans-Bold.ttf')

   });
 };
export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false);
  if(!fontLoaded){
    return <AppLoading startAysnc ={fetchFonts} onFinish ={()=>
      setFontLoaded(true)
    }/>
  }
  return (
   <MealsNavigator/>
  );
}

const styles = StyleSheet.create({

});
