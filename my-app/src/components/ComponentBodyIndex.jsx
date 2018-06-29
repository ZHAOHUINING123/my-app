import React from 'react';
import BodyChild from './BodyChild';
import Mixinlog from './mixins';
import ReactMixin from 'react-mixin';
import { Input } from 'antd';
import Map from './map';
//import ReactDOM from 'react-dom';
export default class BodyIndex extends React.Component{
	
	constructor(){
		super();
		this.state ={
		}
	}

	// propTypes: {  
 //        userid: React.PropTypes.number.isRequired  
 //    }



	render(){
		const styleBorder = {
			border:{
				'paddingLeft':window.innerWidth*0.02,
				'paddingRight':window.innerWidth*0.02,
				'paddingTop':window.innerWidth*0.02,
				'paddingBottom':window.innerWidth*0.02,
				margin:0,
				width: window.innerWidth,
			}	
		};
		const styleMAP = {
			MAP:{
				 border: '30px solid green',
				 padding :'40PX BLACK'
			}	
		};
		return(
			<div style={styleBorder.border}>
				<Map style={styleMAP.MAP}/>
			</div>        
		)
	}
}
