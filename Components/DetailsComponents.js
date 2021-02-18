import React from 'react';
import { StyleSheet, Image, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

const DetailsHeader = (props) => <Text style={styles.h1}>{props.content}</Text>;

const DetailsParagraph = (props) => <Text style={styles.p}>{props.content}</Text>;

const DetailsImage = (props) => {
	const source = Image.resolveAssetSource(props.content);
	const imageHeight = source.height * width / source.width;

	return (
		<Image 
			style={{
				width: width,
				height: imageHeight
			}} 
			source={props.content}
		/>
	);
}


const styles = StyleSheet.create({
	h1: {
		marginHorizontal: 24,
		marginTop: 32,
		marginBottom: 8,
		fontWeight: "bold",
		fontSize: 30,
	},

	p: {
		marginHorizontal: 24,
		marginTop: 8,
		fontSize: 18,
		textAlign: "justify",
	},


});

export { DetailsHeader, DetailsParagraph, DetailsImage };