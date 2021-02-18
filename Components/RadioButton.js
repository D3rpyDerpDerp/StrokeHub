import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

count = 0;
export default class RadioButton extends Component {
	state = {
		value: null,
    };
    store = [];

	render() {
        
		const { PROP } = this.props;
        const { value } = this.state;
        const {ans}  = this.props;
        const temp = []
        {ans.map(res=>{
            temp.push(res)

        })}
        var rbtn_value = ""
        var result = true;
        temp.map(res => {
            

            if({value}.value == res)
            {
               result = true;
                console.log(temp);
               alert("correct")
               
                console.log("correct");
            }
            else if({value}.value != null && {value}.value != res)
            {
                result = false;
                console.log(temp);
                alert("try again")
                console.log("try again");
                console.log({value}.value) ;
            }
        })
        
        
		return (
			<View>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
                                style={styles.radioCircle}
                                
                                
                                
								onPress={ async() => {
                                   
                                    
                                    
                                
                                    
									this.setState({
										value: res.key,
                                    });
                                    
                                    
                                    

                                   
                                    
                                    
                                    
                                        
                                
                                   

								}}>
                                    
                                    
                                    
                                    

                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
						</View>
					);
				})}
                
                <Text> Selected: {this.state.value} </Text>
                
                
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginHorizontal: 24,
		marginTop: 32,
		marginBottom: 8,
        fontSize: 18,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});