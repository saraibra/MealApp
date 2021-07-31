import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/GategoryGridTile";


const CategoriesScreen = props => {
    const renderGategoryItem = (itemData) => {
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                });
            }}
        />
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} renderItem={renderGategoryItem} numColumns={2} />

    );
};
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories',

};
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});
export default CategoriesScreen;