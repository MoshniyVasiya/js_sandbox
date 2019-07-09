import React from 'react';

export default class WrapInEmoji extends React.Component{
	constructor(){
		super();

		
		this.state = {
			left: String.fromCodePoint(Math.floor(Math.random() * (128586 - 128513)) + 128513),
			right: String.fromCodePoint(Math.floor(Math.random() * (128586 - 128513)) + 128513),
		};

		
    	this.leftEmoji = this.leftEmoji.bind(this);
		this.rightEmoji = this.rightEmoji.bind(this);
		this.state.default = true;
	}

	leftEmoji(){
		this.setState({
		left: this.state.left= String.fromCodePoint(Math.floor(Math.random() * (128586 - 128513)) + 128513)
		});
	}
	rightEmoji(){
		this.setState({
		right: this.state.right = String.fromCodePoint(Math.floor(Math.random() * (128586 - 128513)) + 128513)
		});
	}

	componentDidMount() {	
		this.state.default = false;
		
	}
	
	render(){
		if(this.props.defaultEmoji && this.state.default){	
			this.state = {	
				left: String.fromCodePoint(this.props.defaultEmoji) ,
				right: String.fromCodePoint(this.props.defaultEmoji) ,
			}
		}
		
		return(
		<div>
			<span onClick={this.leftEmoji}>{this.state.left}</span>
			{this.props.children}
			<span onClick={this.rightEmoji}>{this.state.right}</span>
		</div>
		)
	}
}