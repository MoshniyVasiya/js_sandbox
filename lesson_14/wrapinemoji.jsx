import React from 'react';

const emojis = ['U+1F600', 'U+1F603', 'U+1F604', 'U+1F601', 'U+1F606'];

export class WrapInEmoji extends React.Component { 
    constructor() { 
        super();
        
        
        
        this.onEmojiClick = this.onEmojiClick.bind(this);
        
    }

onEmojiClick() {    
    this.setState({ 

    })
}

render() {  
    const defaultEmoji = this.props.defaultEmoji;
    return (
        <div>   
        {}
        <span><br /></span>
        {}
        </div> 
    )
}
}