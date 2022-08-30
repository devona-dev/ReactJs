import React from 'react';
import ReactDOM from 'react-dom/client';

/*
class Car extends React.Component {

  signal() {
    alert("Beep!")
  }
  render() { 
    return (
      <button onClick={ this.signal }>signal bermoq</button>
    )
  }
}
*/

/*
class Car extends React.Component {
  signalSound
  constructor() {
    super();
    this.signalSound = "Beep! Beep!";
  }
  shoot = () => {
    alert(this.signalSound)
  }
  render() { 
    return ( 
      <button onClick={this.shoot}>Signal bermoq</button>
     );
  }
}
*/

/*

class Car extends React.Component {
  signal = (sound) => {
    alert(sound);
  }
  render() { 
    return (  
      <button onClick={() => this.signal("Beep3!")}>Signal bermoq</button>
    );
  }
}
*/
// class Car extends React.Component {
//   signal = (sound, evt) => {
//     alert(sound + " Xodisa turi " + evt.type);
//   }
//   render() { 
//     return (  
//       <button onClick={(event) => this.signal("Beep4 !", event)}>Signal bermoq</button>
//     );
//   }
// }


// class SignUpForm extends React.Component {
//   render() { 
//     return ( 
//       <form>
//           <h1>Salom</h1>
//           <p>Ismingizni kiriting</p>
//           <input type="text" />
//       </form>
//      );
//   }
// }


// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: "" };
//   }

//   changeHandler = (event) => {
//     this.setState({username: event.target.value})
//   }

//   render() { 
//     return ( 
//       <form>
//           <h1>Salom {this.state.username}</h1>
//           <p>Ismingizni kiriting</p>
//           <input type="text" onChange={this.changeHandler}/>
//       </form>
//      );
//   }
// }

// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: "" };
//   }

//   changeHandler = (event) => {
//     this.setState({ username: event.target.value })
//   }

//   render() {
//     let header = "";
//     if (this.state.username) {
//       header = <h1>Salom {this.state.username}</h1>
//     } else {
//       header = "";
//     }
//     return (

//       <form>
//         {header}
//         <p>Ismingizni kiriting</p>
//         <input type="text" onChange={this.changeHandler} />
//       </form>
//     );
//   }
// }


// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: "" };
//   }

//   submithandler = (event) => {
//     event.preventDefault();
//     alert(this.state.username + " ni jo'natmoqchi edizmi o'zizcha")
//   }

//   changeHandler = (event) => {
//     this.setState({ username: event.target.value })
//   }

//   render() {
//     return (
//       <form onSubmit={this.submithandler}>
//         <h1>Salom {this.state.username}</h1>
//         <p>Ismingizni kiriting</p>
//         <input type="text" onChange={this.changeHandler} />
//         <input type="submit" value="Jo'natmoq" />
//       </form>
//     );
//   }
// }


// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       agr: null

//     };
//   }

//   changeHandler = (event) => {
//     let elementName = event.target.name;
//     let elementValue = event.target.value;
//     this.setState({ [elementName]: elementValue })
//   }

//   render() {
//     return (
//       <form onSubmit={this.submithandler}>
//         <h1>Salom {this.state.username}{this.state.age}</h1>
//         <p>Ismingizni kiriting</p>
//         <input type="text" name='username' onChange={this.changeHandler} />
//         <p>yoshingizni kiriting</p>
//         <input type="text" name='age' onChange={this.changeHandler} />
//       </form>
//     );
//   }
// }

// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       agr: null

//     };
//   }

//   submithandler = (event) => {
//     event.preventDefault();
//     let age = this.state.age;
//     if(!Number(age)){
//       alert("Yoshni kiritishda sondan foydalaning...")
//     }
//   }

//   changeHandler = (event) => {
//     let elementName = event.target.name;
//     let elementValue = event.target.value;
//     this.setState({ [elementName]: elementValue })
//   }

//   render() {
//     return (
//       <form onSubmit={this.submithandler}>
//         <h1>Salom {this.state.username}{this.state.age}</h1>
//         <p>Ismingizni kiriting</p>
//         <input type="text" name='username' onChange={this.changeHandler} />
//         <p>yoshingizni kiriting</p>
//         <input type="text" name='age' onChange={this.changeHandler} />
//         <br />
//         <br />
//         <input type="submit" value="Jo'natmoq"/>
//       </form>
//     );
//   }
// }


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      errormessage: ""

    };
  }

  changeHandler = (event) => {
    let elementName = event.target.name;
    let elementValue = event.target.value;
    let err = "";
    if(elementName === "age") {
      if(elementName !== "" && !Number(elementValue)) {
        err = <span style={{color: 'red'}}>Yoshni kiritishda sondan foydalanig</span>
      }
    }
    this.setState({errormessage: err });
    this.setState({ [elementName]: elementValue });
  }

  render() {
    return (
      <form onSubmit={this.submithandler}>
        <h1>Salom {this.state.username}{this.state.age}</h1>
        <p>Ismingizni kiriting</p>
        <input type="text" name='username' onChange={this.changeHandler} />
        <p>yoshingizni kiriting</p>
        <input type="text" name='age' onChange={this.changeHandler} />
        {this.state.errormessage}
        <br />
        <br />
        <input type="submit" value="Jo'natmoq"/>
      </form>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignUpForm />);

