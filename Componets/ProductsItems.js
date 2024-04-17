import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const ProductsItems = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.textTitle} numberOfLines={1}>{product.name}</Text>
                <Text style={styles.textDescription} numberOfLines={3}>{product.description}</Text>
                <Text style={styles.textPrice}>${product.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        elevation: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 10,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 16,
    },
    textPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    }
});

export default ProductsItems;