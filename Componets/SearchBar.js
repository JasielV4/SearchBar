import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={20} color="#000" />
            <TextInput
                placeholder="Search..."
                placeholderTextColor="#666"
                style={styles.input}
                multiline={false}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 1,
        marginTop: 20
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        color: '#333',
    }
});

export default SearchBar;