import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetails from '../screens/MealDetails';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import Color from '../constants/Color';
import { Platform } from 'react-native';
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealScreen,
    },
    MealDetails: MealDetails,
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Color.accentColor,
        }
    }
);
export default MealsNavigator;