import React from 'react';
import ReactDOM from 'react-dom';
import First from './first' ;
import Second from './second';
import Third from './third';

class Main extends React.Component {    
    constructor() { 
        super();

        this.state = {  
            status: '',
            page: 1,
        }
    this.pageClick = this.pageClick.bind(this);

    }    

pageClick(){    
    this.setState({ 
        page: this.state.page + 1,
    })
}

render() {  
    if (this.state.page === 1) {
        return (
           <First onClick={this.pageClick}/> 
        );
    }
    if(this.state.page === 2){    
        return( 
            <Second onClick={this.pageClick}/>
        );
    }
    if(this.state.page === 3){    
        return( 
            <Third onClick={this.pageClick}/>
        );
    }
    if(this.state.page === 4){    
        return( 
            <Forth />
        );
    }
    if(this.state.page === 5){    
        return( 
            <Fifth />
        );
    }
    if(this.state.page === 6){    
        return( 
            <Sixth />
        );
    }    
}

}
ReactDOM.render((   

    <Main ></Main>

), document.getElementById('root'))