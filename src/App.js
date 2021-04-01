 import React from 'react';
 import Dropdown from './components/Dropdown';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   View,
  Text } from 'react-native';

  const styles = StyleSheet.create({
    dropdownItem: {
      height: 50,
      backgroundColor: '#95a5a6',
      borderColor: 'black',
      borderWidth: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    }
  });
 
 const App: () => Node = () => {
   return (
     <SafeAreaView>
       <StatusBar barStyle={'dark-content'} />
       <ScrollView>
         <Dropdown>
           <View style={styles.dropdownItem}>
             <Text>Chile</Text>
           </View>
           <View style={styles.dropdownItem}>
             <Text>Bolivia</Text>
           </View>
           <View style={styles.dropdownItem}>
             <Text>Argentina</Text>
           </View>
         </Dropdown>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 
 export default App;
 