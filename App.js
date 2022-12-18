import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  BalooBhai2_700Bold,
  BalooBhai2_800ExtraBold,
} from '@expo-google-fonts/baloo-bhai-2';
import {
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';
import AppLoading from "expo-app-loading"
import { useFonts } from 'expo-font';
export default function App(props) {
  const [texts,setText]= useState("")
  const [c,setC]= useState("")
  const [f,setF]= useState("")
  const [co,setCo]= useState("")
  const data=()=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=9413ae19af5947609b4112935222404&q=${texts}&aqi=no`)
  .then((response) => response.json())
  .then((data) =>{
    setC(data.current.temp_c)
    setF(data.current.temp_f)
    setCo(data.current.condition["text"])
  })

  }
  let [fontsLoaded] = useFonts({
    BalooBhai2_400Regular,
    BalooBhai2_500Medium,
    BalooBhai2_600SemiBold,
    BalooBhai2_700Bold,
    BalooBhai2_800ExtraBold,
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={{uri:"https://images.muhammedraiyaan.repl.co/bg.jpg"}} resizeMode="cover" style={styles.image}>
        <Text style={{marginTop:"13%",marginLeft:"25%",fontSize:30,fontFamily:"monospace"}}>Weather App</Text>
        <TextInput style={styles.area} placeholder="Enter the city name" onChangeText={(e)=>{setText(e)}}/>
        <TouchableOpacity onPress={data} style={styles.fetch}><Text style={{color:"white",fontSize:17,fontFamily:"BalooBhai2_400Regular"}}>Search</Text></TouchableOpacity>
          <Text style={{marginTop:"15%", fontWeight:"bold", color:"skyblue",fontFamily:"ABeeZee_400Regular_Italic",fontSize:25,marginLeft:"3%"}}>Celsius:<Text style={{color:"coral"}}>{c}</Text></Text> 
          <Text style={{marginTop:"15%", fontWeight:"bold", color:"skyblue",fontFamily:"ABeeZee_400Regular_Italic",fontSize:25,marginLeft:"3%"}}>Fahrenheit:<Text style={{color:"coral"}}>{f}</Text></Text> 
          <Text style={{marginTop:"15%", fontWeight:"bold", color:"skyblue",fontFamily:"ABeeZee_400Regular_Italic",fontSize:25,marginLeft:"3%"}}>Weather Type:<Text style={{color:"coral"}}>{co}</Text></Text>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"white",
    backgroundImage: 'url(image.jpg)',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
    width:"100%"
  },
  image: {
    flex: 1,
    width:"100%",
    color:"white"
  },
  area:{
    height: 40,
    width:"70%",
    marginLeft:"15%",
    margin: 12,
    borderWidth:1,
    padding: 10,
    marginTop:"5%",
    borderRadius:100000
  },
  fetch:{
    alignItems: "center",
    backgroundColor: "coral",
    padding: 10,
    width:"30%",
    borderRadius:5,
    marginLeft:"35%"
  }
});
