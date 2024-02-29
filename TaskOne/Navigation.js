import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FirstPage" component={FirstPage} />
            <Stack.Screen name="SecondPage" component={SecondPage} />
        </Stack.Navigator>
    );
}

export default Navigation;
