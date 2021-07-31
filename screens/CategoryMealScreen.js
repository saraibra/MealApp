import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { options } from "yargs";
import { CATEGORIES } from "../data/dummy-data";
const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View>

        </View>
    );
};
CategoryMealScreen.navigationOptions = navigationData=>{
   const catId =  navigationData.navigation.getParam('categoryId')
   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
return{
    headerTitle:selectedCategory.title,
};
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default CategoryMealScreen;