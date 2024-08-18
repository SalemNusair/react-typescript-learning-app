import { Component } from "react";
type CounterProps = {
    message: string;
};
type CounterState = {
    count: number;
    // render: ReactNode;
    // state:{count:number};
};
export class Counter extends Component<CounterProps, CounterState> {
    state: CounterState = {
        count: 0,
    };
    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        console.log(this.state.count);
        return (
            <div>
                <button onClick={this.handleClick}>
                    Increamnt Class component
                </button>
                <div>{this.props.message}</div>
                <div>{this.state.count}</div>
            </div>
        );
    }
}
