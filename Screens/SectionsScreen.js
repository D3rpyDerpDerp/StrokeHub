import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import SectionCell from "../Components/SectionCell";



const SectionsScreen = ({ navigation, route }) => {
	const renderItem = ({ item }) => {
		return <SectionCell
			thumbnail={item.thumbnail}
			title={item.title}
			subtitle={item.subtitle}
			onPress={() => {
			if (item.type == "sections") {
				console.log(item.body)
				navigation.push("Sections", item );
			} else {
				navigation.navigate("Details", item); 
				}
			}}
		/>;
	};
 

	navigation.setOptions({title: route.params.title})

	return (
		<SafeAreaView>  
			<FlatList
				data={route.params.body }
				renderItem={renderItem}
			/>
		</SafeAreaView>
	);
};

export default SectionsScreen;
