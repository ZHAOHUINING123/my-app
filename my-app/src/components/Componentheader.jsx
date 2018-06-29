import React from 'react';
import Logo from './logo';


export default class ComponentHeader extends React.Component{
constructor(){
	super();
	this.state = {
		miniHeader: false
	}
}
switchHeader(){
	this.setState({
		miniHeader: !this.state.miniHeader
	})
}
	

	render(){
		const styleHeader = {
			header:{
				backgroundColor: '#0E92DD',
				height: window.innerHeight/5,
				color:'blue',
			}	
		};
		return(
        	<header style={styleHeader.header} className="smallFontsize"
        	onClick={this.switchHeader.bind(this)}>
        		<Logo/>
      			
        	</header>         
		)
	}
}