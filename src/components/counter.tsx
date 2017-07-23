import * as React from "react";
import * as css from './counter.css';

interface CounterState{
    count: number;
}

export class Counter extends React.Component<undefined, CounterState> {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment = (): void => {
        console.log("increment");
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = (): void => {
        console.log("decrement");
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return(
            <div className = { css.wrapper }>
                <h1>Example counter with react + typescript</h1>
                <button className = { css.btn } onClick = { this.increment }>increment</button>
                <button className = { css.btn } onClick = { this.decrement }>decrement</button>
                <div className = { css.counter }>{ this.state.count }</div>
            </div>
        )
    }
}