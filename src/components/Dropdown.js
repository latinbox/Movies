import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2980b9',
    padding: 20,
  },

});



const Dropdown = ({ children}) => {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity
         onPress={() => toggleFunction()}
        >
          <View style={styles.dropdown}>
            <Text>Dropdown</Text>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
        { toggle && children}
      </View>
  );
};

export default Dropdown;
