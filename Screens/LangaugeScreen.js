import React from 'react';
import { SafeAreaView, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import LanguageCell from "../Components/LanguageCell";

import Posts from "../Data/Posts";

const { width } = Dimensions.get("window");

const LanguageScreen = ({ navigation }) => {
	const renderItem = ({ item }) => {
		return <LanguageCell
			title={item.language}
			onPress={() => {
				navigation.navigate("Sections", item.section)   				
			}}
		/>;
	};

	const logo = require("../assets/logo.png");
	const source = Image.resolveAssetSource(logo);
	const imageHeight = source.height * width / source.width;

	return (
		<SafeAreaView style={styles.container}>  
			<FlatList
				data={Posts}
				renderItem={renderItem}
			/>
			<Image
                style={{
					width: width * 0.8,
					height: imageHeight * 0.8,
					alignSelf: 'center',
					marginBottom: 50,
				}}
                source={logo}
            />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	}

});

export default LanguageScreen;
