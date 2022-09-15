import { Component } from "react";

class ClassComponent extends Component{
    render() {
        return (
            <h1>
                Привет из Класса, {this.props.name}
            </h1>
        );
    }
}

export default ClassComponent