 import React from 'react';
 import Home from './screens/Home';
 import movies from './rawData/movies.json';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   View,
  Text } from 'react-native';


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3e50',
    },
  });
 
 const App: () => Node = () => {
   return (
     <>
       <StatusBar barStyle={'dark-content'} />
       <SafeAreaView style={styles.container}>
       <Home movies={movies} />  
     </SafeAreaView>
     </>
   );
 };
 
 
 export default App;
 