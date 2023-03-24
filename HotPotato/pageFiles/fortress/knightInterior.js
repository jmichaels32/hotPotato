import { Text, TouchableOpacity, View } from 'react-native';
import { getPotatoes, updatePotatoes, awardRandomPotatoes } from '../../firebaseCalls.js';
import { useState } from 'react';

// Local file import
import * as Const from '../../constants.js'
import * as Styles from '../../styles.js';
import { BarInterior, IntKnight1, IntKnight2, IntKnight3, IntKnight4, IntKnight5, IntKnight6,
        IntKnight7, IntKnight8, IntKnight9, IntKnight10, Bar, DefKnightCarpet, Scroll, PotatoContainer, PaletteButton } from '../../constants.js';

const KnightInterior = (props) => {

    const [potatoes, setPotatoes] = useState({})

	const setup = async () => {
		let potatoes = await getPotatoes();
		setPotatoes(potatoes.data());
	}
	setup();

	return (
		<View style={{height: '86.5%'}}>
			<BarInterior height={'100%'} />
            <View style={[Styles.constantStyles.svgCenter, { top: 50, left: 0, right: 50, bottom: 0}]}>
				<DefKnightCarpet />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 140, right: 0, bottom: 220 }]}>
                { potatoes.knights >= 2 ? <IntKnight2 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 110, right: 0, bottom: 150 }]}>
				<Bar />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 20, bottom: 190 }]}>
                { potatoes.knights >= 1 ? <IntKnight1 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 220, left: 270, right: 0, bottom: 0 }]}>
                { potatoes.knights >= 3 ? <IntKnight3 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 260, left: 0, right: 280, bottom: 0 }]}>
                { potatoes.knights >= 4 ? <IntKnight4 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 210, right: 0, bottom: 190 }]}>
                { potatoes.knights >= 5 ? <IntKnight5 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 200, bottom: 100 }]}>
                { potatoes.knights >= 6 ? <IntKnight6 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 240, left: 0, right: 0, bottom: 0 }]}>
                { potatoes.knights >= 7 ? <IntKnight7 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 30, left: 50, right: 0, bottom: 0 }]}>
                { potatoes.knights >= 8 ? <IntKnight8 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 30, left: 0, right: 90, bottom: 0 }]}>
                { potatoes.knights >= 9 ? <IntKnight9 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 50, left: 0, right: 320, bottom: 0 }]}>
                { potatoes.knights >= 10 ? <IntKnight10 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 20, left: 0, right: 0, bottom: 550}]}>
				<View style={{position: 'absolute'}}>
                    <Scroll />
                </View>
                <View style={{position: 'absolute'}}>
                    <Text style={Styles.textStyles.medium}>Tavern</Text>
                </View>
                
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 40, left: 300, right: 0, bottom: 550}]}>
				<View style={{position: 'absolute'}}>
                    <PotatoContainer />
                </View>
                <View style={{position: 'absolute', right: 55, bottom: 12}}>
                    <Text style={Styles.textStyles.medium}>{potatoes.knights}</Text>
                </View>
                <View style={{position: 'absolute', right: 45, bottom: 3}}>
                    <Text style={Styles.textStyles.medium}>/</Text>
                </View>
                <View style={{position: 'absolute', right: 20, top: 20}}>
                    <Text style={Styles.textStyles.medium}>10</Text>
                </View>
			</View>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 290, bottom: 520}]}
			onPress={() => {props.changePage(Const.KNIGHTINTERIOR, Const.CUSTOMIZEPAGE);}}>
                <PaletteButton style={Styles.pageStyles.button} />
            </TouchableOpacity>
		</View>
	)
};

export default KnightInterior;