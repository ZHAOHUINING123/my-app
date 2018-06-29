import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/Componentheader'; 
import ComponentFooter from './components/ComponentFoot'; 
import BodyIndex from './components/ComponentBodyIndex'; 
import Map from './components/map';
import BorderLine from './components/borderline';
import Appx from './components/mapx';



class Index extends Component {
  render() {
  	const style = {
			page:{
				backgroundColor: '#0E92DD',
			}	
		};
    return (
      <div style={style.page}>
        <ComponentHeader/> 
        <BorderLine/>   
        <BodyIndex />
        <Appx />
        <ComponentFooter/>
      </div>
    );
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'))
export default Index;
