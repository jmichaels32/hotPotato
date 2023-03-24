import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';

// Local file import
import * as Styles from '../styles.js';

const WorkoutPage = () => {
    return (
        <View style={Styles.pageStyles.container}>
            
            <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.contentBox} 
            start={{ x: 0.7, y: 0 }} end={{x: 0.65, y: 0.3}}>
                <Text style={Styles.textStyles.subHeader}> Welcome! </Text>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={Styles.textStyles.medium}>
                        {"\n"} We're here to help you along your "spud"-tacular journey from coach potato to the ultimate hot potato. {"\n"} {"\n"}
                        Are you ready? I "y-am"! {"\n"} {"\n"} So what are you waiting for... It's time to "starch" your workout! {"\n"}
                    </Text>

                </View>
            </LinearGradient>
        </View>
    )
}

export default WorkoutPage