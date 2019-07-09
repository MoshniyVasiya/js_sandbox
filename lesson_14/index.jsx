import React from 'react';
import ReactDOM from 'react-dom';
import WrapInEmoji from './wrapinemoji';
import Timer from './timer';


ReactDOM.render((   

<div>   
    <WrapInEmoji defaultEmoji="128545"><Timer /></WrapInEmoji>
    
</div>
), document.getElementById('root'));