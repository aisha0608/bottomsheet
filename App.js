import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { BottomSheetModal,BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef ,useState} from "react";
import {
  GestureHandlerRootView, Switch
} from 'react-native-gesture-handler';
 

export default function App() {
  const [darkmode,setDarkmode]=useState(false);
  const [device,setDevice]=useState(false);
  const{width}=useWindowDimensions();
  const bottomSheetModalRef=useRef(null);
  const snapPoints=["25%","48%","75% "];
  function handlePresentModal()
  {
    bottomSheetModalRef.current?.present();
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <BottomSheetModalProvider>
    <View style={styles.container}>
      <Button title="Present Modal" onPress={handlePresentModal}/>
      <StatusBar style="auto" />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{borderRadius:50}}
      
      >
        <View style={styles.contentContainer}>
          <Text style={[styles.title,{marginBottom:20}]}>Dark Mode</Text>
          <View style={styles.row}>
            <Text  style={styles.subtitle}>Dark Mode</Text>
            <Switch 
            value={darkmode}
            onChange={()=> setDarkmode(!darkmode)}></Switch>
          </View>
          <View style={styles.row}>
            <Text  style={styles.subtitle}>Use device settings</Text>
            <Switch 
            value={device}
            onChange={()=> setDevice(!device)}></Switch>
          </View>
          <Text style={styles.description}>
            Set Dark mode to use the light mode 
          </Text>
          <View 
            style={{
              width:width,
              borderBottomWidth:StyleSheet.hairlineWidth,
              borderBottomColor:'red',
              marginVertical:30, 
            }}
          >

          </View>
        </View>
      </BottomSheetModal>
    </View>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer:{
    flex:1,
    alignItems:"center",
    paddingHorizontal:15,
  },
  row:
  {
    width:"100%",
     flexDirection:"row",
     alignItems:"center",
      justifyContent:"space-between",
      marginVertical:10, 
  },
  title:{
    fontWeight:"900"
  },
  subtitle:
  {
    color:"#101318",
    fontSize:14,
    fontWeight:"bold",
  },
  description:
  {
    color:"#101318",
    fontSize:13,
    fontWeight:"normal",
    width:"100%",
  },
});
