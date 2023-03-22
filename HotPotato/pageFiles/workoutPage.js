import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';

// Local file import
import * as Styles from '../styles.js';

const WorkoutPage = () => {
    return (
        <View style={Styles.pageStyles.container}>
            
            <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.contentBox} 
            start={{ x: 0.7, y: 0 }} end={{x: 0.65, y: 0.3}}>
                <Text style={Styles.textStyles.subHeader}>Workouts in Progress </Text>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    {/* Not implemented yet, need way to switch pages from other components */}
                    <TouchableOpacity>
                        <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.button]} >
                            <Text style={Styles.textStyles.medium}>Lifting</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.button]} >
                            <Text style={Styles.textStyles.medium}>Rowing</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                
            </LinearGradient>
            
            
            
            <View style={Styles.pageStyles.contentBox}>
                <Text style={Styles.textStyles.medium}>Medium text</Text>
            </View>
            <View style={Styles.pageStyles.contentBox}>
                <Text>Default Text</Text>
            </View>
        </View>
    )
}

export default WorkoutPage