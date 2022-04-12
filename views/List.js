import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ProductContext } from '../ProductContext'

const List = (props) => {
    const { navigation } = props;
    const { products, onGetProducts } = useContext(ProductContext);

    useEffect(async () => {
        await onGetProducts();
        return () => { }
    }, [])
    const renderItem = ({ item }) => {
        const { _id, name, price, image } = item;
        return (
            <View>
                <Image source={{ uri: image }}
                    resizeMode={'cover'} style={{ width: 100, height: 100 }} />
                <Text>Name :{name}</Text>
                <Text>Price: {price}</Text>
            </View>
        )
    }
    return (
        <View style={styles.listContainer}>
            <Text>List</Text>
            <FlatList data={products}
                renderItem={renderItem}
                keyExtractor={Math.random}>
            </FlatList>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        padding: 32,
    },
})