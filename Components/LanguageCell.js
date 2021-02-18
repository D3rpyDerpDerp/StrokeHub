import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LanguageCell = (props) => {
    return (
        <TouchableOpacity style={styles.row} onPress={props.onPress}>	
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
        marginHorizontal: 16,
        marginTop: 16,
    },

    title: {
        marginHorizontal: 16,
        marginBottom: 16,
        fontWeight: "bold",
        fontSize: 20,
    },

    tinyLogo: {
        width: 180,
        height: 180,
    },

   
});

export default LanguageCell;