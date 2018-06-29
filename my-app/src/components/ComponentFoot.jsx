import React,{Component} from 'react';
import {Row},{Col}  from 'react-bootstrap';

export default class ComponentFooter extends Component{
	render(){
		return(
			<footer>
				<Col xs={12} md={8} /><Col xs={6} md={4} />
			</footer>	
		)
	}
}