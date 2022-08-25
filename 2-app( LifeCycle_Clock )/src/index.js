import React from 'react';
import ReactDOM from 'react-dom/client';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }; // vaqtni korsatadigan metod

    };

    componentDidMount() {                     // Render qilinib bolgan vaqt ishlaydi
        this.timerID = setInterval(
            () => this.tick(),                 // buni har soniyada chaqiryapmiz va uni timerID ga qiymat qilib beryapmiz
            1000                                    // secund degani
        );
    }

    componentWillUnmount() {                // bu funktsiya app ni ochirganda xotiradan tozalab tashlaydi
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Soat {this.state.date.toLocaleTimeString()} bo'ldi</h1>
            </div>
        ) 
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
