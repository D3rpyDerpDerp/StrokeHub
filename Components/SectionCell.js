import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SectionCell = (props) => {
	return (
	<TouchableOpacity
		style={styles.row}
		onPress={props.onPress}
  	>
		<View style={styles.imageWrapper}>
			<Image
				style={styles.thumbnail}
				source={props.thumbnail}
			/>
		</View>

		<Text style={styles.title}>{props.title}</Text>
		<Text style={styles.subtitle}>{props.subtitle}</Text>
	</TouchableOpacity>
	)
};

const styles = StyleSheet.create({
	row: {
		marginHorizontal: 16,
		marginTop: 16,
	},

	imageWrapper: {
		height: 125,
		margin: 8,
		borderRadius: 8,
		overflow: "hidden",
	},

	thumbnail: {
		flex: 1,
		width: null,
		height: null,
	},

	title: {
		marginHorizontal: 16,
		marginBottom: 0,
		fontWeight: "bold",
		fontSize: 20,
	},

	subtitle: {
		marginHorizontal: 16,
		fontStyle: "italic",
		opacity: 0.5,
		marginBottom: 16,
	},
});

export default SectionCell;