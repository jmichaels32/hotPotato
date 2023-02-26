import { Text, View } from 'react-native';

// Local file import
import * as Styles from '../styles.js';

const WorkoutPage = () => {
    return (
        <View style={Styles.pageStyles.container}>
            <View style={Styles.pageStyles.contentBox}>
                <Text> Example content box 1 </Text>
            </View>
            <View style={Styles.pageStyles.contentBox}>
                <Text> Example content box 2 </Text>
            </View>
            <View style={Styles.pageStyles.contentBox}>
                <Text> Example content box 3 </Text>
            </View>
        </View>
    )
}

export default WorkoutPage