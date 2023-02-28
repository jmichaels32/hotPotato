import { Text, View } from 'react-native';

// Local file import
import * as Styles from '../styles.js';

const WorkoutPage = () => {
    return (
        <View style={Styles.pageStyles.container}>
            <View style={Styles.pageStyles.contentBox}>
                <Text style={Styles.textStyles.header}>Header </Text>
            </View>
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