import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native'; 

export default class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {input, ...inputProps} = this.props;
		return (
			
			<View>
				<TextInput
				{...inputProps}
				onChangeText={input.onChange}
				onBlur={input.onBlur}
				onFocus={input.onFocus}
				value={input.value}
				/>
			</View>


		)
	}

}



