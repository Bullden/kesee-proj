import {createStackNavigator} from "react-navigation-stack";
// import WelcomePage from "./components/WelcomePage/WelcomePage";
// import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
import {createAppContainer} from "react-navigation";
// import VerifyNumber from "./components/VerifyNumber/VerifyNumber";
// import VerifyCode from "./components/VerifyCode/VerifyCode";
// import Shop from "./components/Shop/Shop";
// import FullItemShop from "./components/FullItemShop/FullItemShop";
// import FullCategories from "./components/FullCategories/FullCategories";
// import AllMenu from "./components/AllMenu/AllMenu";
// import CategoryItems from "./components/CategoryItems/CategoryItems";
// import Dish from "./components/Dish/Dish";
// import Order from "./components/Order/Order";
// import Checkout from "./components/Checkout/Checkout";
// import Footer from "./Footer";
// import Profile from "./components/Profile/Profile";
// import OptionProfile from "./components/OptionProfile/OptionProfile";
import IncomeScreen from "./components/IncomeScreen/IncomeScreen";

const MainNavigation = createStackNavigator({
    IncomeScreen: {
        screen: IncomeScreen,
        navigationOptions: {
            headerShown: false,
        },
    },
    
});
const Navigation = createAppContainer(MainNavigation)
export default Navigation
