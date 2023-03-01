import { Text, View } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';

// Local file import
import * as Styles from '../styles.js';

const WorkoutPage = () => {
    return (
        <View style={Styles.pageStyles.container}>
            
            <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.linearGradient} 
            start={{ x: 0.7, y: 0 }} end={{x: 0.65, y: 0.3}}>
                <Text style={Styles.textStyles.header}>Header </Text>
            </LinearGradient>
            
                
            
            
            <View style={Styles.pageStyles.contentBox}>
                <Text style={Styles.textStyles.subHeader}>Sub Header</Text>
            </View>
            <View style={Styles.pageStyles.contentBox}>
                <Text>Normal Text</Text>
            </View>
        </View>
    )
}

export default WorkoutPage