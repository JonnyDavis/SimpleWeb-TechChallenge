import React, { Component } from 'react';
import { TextInput, View, Text, TouchableHighlight } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import Input from './Input';



class Form extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);

        this.state = {
    // map over each field and add a value property
            fields: props.fields.slice(),
        
        };
    }

    submit(e) {
        e.preventDefault();

        let data = this.state.fields.reduce((data, field) => {
	        data[field.name] = field.value;
	        return data;
    }, {});
        
        this.props.onSubmit(data);
        console.log(data);
    }

    // ...

    change(e, i) {
    let fields = this.state.fields.slice();
    fields[i].value = e.target.value;
    this.setState({ fields: fields });
}
    render() {
        const { /*className*/, button } = this.props;
        return (
        
                { this.state.fields.map(({ name, placeholder, value }, i) => (
                    <Field 
                    component={ Input }
                    value={ value } 
                    name={ name } 
                    placeholder={ placeholder } 
                    />
                ))}
                <TouchableHighlight onPress={ this.submit }>{ button }</TouchableHighlight>
            
        );
    }
}
export default Form;