import React from "react";

class Laptop extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            brand: "Dell",
            model: "vostro",
            color: "black",
            size: "14"
         };
    };

    changeLaptop = () => {
        this.setState({ model: "insprion", color: "silver", size: 15 });
    };

    render() {
        return (
            <div>
                <h1>{this.state.brand}</h1>
                <p>
                    Model: {this.state.model}
                    <br />
                    Color: { this.state.color }
                    <br />
                    Size: { this.state.size }
                </p>
                <button type="button" onClick={ this.changeLaptop }>Modelni o'zgartirish</button>
            </div>
        )
    }
}

export default Laptop;