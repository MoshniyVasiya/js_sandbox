import React from 'react';


export default class First extends React.Component {  
constructor() { 
    super()

    this.state = {  
        
    }

}



render(){   
    
    return(
        <div className="first_stage">
        
            <div className="circle1" />
            <div className="circle2" />
            <div className="circle3" />
        <div id="container">
        <button onClick={this.props.onClick} id="green_button" >    
            
        </button>
        <div className="circle4" />
        </div>
        </div> 
    )}

}