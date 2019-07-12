import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'
import InputPanel from './panel';

class Main extends React.Component {    
    constructor(props) { 
        super(props);

        

    }    

 



render() {  
        
    return( 
        <div className="container">  
        <h1> your<br /> art<br /> museum</h1>
        

        <InputPanel></InputPanel>


        </div>
    );
}
}

ReactDOM.render((   
    <Main>  
    

    </Main>
    
), document.getElementById('root'))