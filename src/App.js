import React, { Component } from "react";
import CountButton from "./CountButton";



class App extends Component {
    state = {
        count: 0
    };
    componentDidMount() {
        alert("let's count number !");
    }
    countup = () => {
        const currentCount = this.state.count;
        this.setState({
            count: currentCount + 1
        });
    }
        countDown = () => {
            const currentCount = this.state.count;
            this.setState({
                count: currentCount - 1
            });
        };
        render() {
            const {count} = this.state;
            return (
                <div className="wrapper">
                    <p className="count">{count}</p>
                    <div className="button-wrapper">
                        <CountButton operator ="+" handleClick={this.countup} />
                        <CountButton operator="-" handleClick={this.countDown} />
                    </div>
                </div>
            );
        }
    }
export default App;