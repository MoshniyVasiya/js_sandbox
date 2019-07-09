import React from 'react';

export default class Timer extends React.Component {
    constructor() {
        super();


        this.state = {
            count: 0,
            startState: false,
            pauseState: true,
            stopState: true,
        }

        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.stop = this.stop.bind(this);
    }
    start() {
        this.setState({
            startState: true,
            pauseState: false,
            stopState: false,
        })
        this.state.intervalId = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            })
        }, 1000);
    }
    pause() {
        clearInterval(this.state.intervalId);
        this.setState({
            startState: false,
            pauseState: true,
            stopState: true,
        });
    }
    stop() {
        clearInterval(this.state.intervalId);
        this.setState({
            count: 0,
            startState: false,
            pauseState: true,
            stopState: true,
        });
    }
    render() {
        return ( 
            <div>
                <button disabled={this.state.startState} onClick={this.start}>Start</button>
                <button disabled={this.state.pauseState} onClick={this.pause}>Pause</button>
                <button disabled={this.state.stopState} onClick={this.stop}>Stop</button>
                <div>{`Seconds passed : `+ this.state.count}</div>
            </div>
        )
    }
    
}