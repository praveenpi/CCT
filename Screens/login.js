import React from 'react';
import {View,Button} from 'react-native'; 
import {TextField} from 'react-native-material-textfield';
import styles from '../CSS/styles';
import { observer } from 'mobx-react';
import DataStore from '../Store/datastore';

@observer
export default class LoginScreen extends React.Component{
  static navigationOptions = {
		title: 'Login',
  };

  constructor(props){
		super(props);
		this.state = {user:'',pwd:'',verified:false};
	}

	_onLogin = () => {
//		TODO -- Axios backend comm implementation
		if(this.state.user == '' || this.state.pwd == '')
			alert("Username and password cannot be empty");
		else /*if(this.state.verified)*/ {
			DataStore.updateUser(this.state.user);
			this.setState({user:'',pwd:'',verified:false});
			this.props.navigation.navigate('Barcode');
		}
//		else
//			alert('Invalid Credentials')

	}
	render(){
		return(
			<View
				style={styles.container}
				>
				<View 
					style={styles.loginBox}
					>
						<TextField
							tintColor = '#000000'
							baseColor = '#000000'
							labelHeight = {0}
							labelPadding = {5}
							inputContainerStyle = {{backgroundColor:'#ffffff'}}
							label = 'Username'
							title = 'Enter username'
							value = {this.state.user}
							onChangeText = {(username) => {this.setState({user:username})}}
							/>
						<TextField
							tintColor = '#000000'
							baseColor = '#000000'
							labelHeight = {0}
							labelPadding = {5}
							label = 'Password'
							title = 'Enter password'
							inputContainerStyle = {{backgroundColor:'#ffffff'}}
							secureTextEntry = {true}
							value = {this.state.pwd}
							onChangeText = {(password) => {this.setState({pwd:password})}}
							/>
				</View>
				<Button
					title = 'Login'
					color = '#009931'
					onPress = {()=>{this._onLogin()}}
					/>
			</View>
		);
	}
}