// import React, { Component } from 'react'


// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>hello</h1>
//       </div>
//     )
//   }
// }

// export default App
// import React, { Component } from 'react'


// export class App extends Component {
//   constructor(){
//     super();
//   }
//   componentDidMount(){
//     console.log('Raju');
//   }
//   render() {
//     return (
//       <div>
//         <h1>hello world</h1>
//       </div>
//     )
//   }
// }

// export default App

// import React, { Component } from 'react'


// export class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       count :0
//     }
//   }
//   componentDidMount(){
//     console.log('Raju');

//   }
//   increment(){
//     this.setState({count:this.state.count+1})
//   } 
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//    <button onClick={this.increment.bind(this)}>click me</button>

//       </div>
//     )
//   }
// }

// export default App



// arrow funtion//


// import React, { Component } from 'react'


// export class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       count :0
//     }
//   }
//   componentDidMount(){
//     console.log('Raju');

//   }
//   increment(){
//     this.setState({count:this.state.count+1})
//   } 
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
  
//         <button onClick ={() =>{this.increment()}}>click me</button>
//       </div>
//     )
//   }
// }

// export default App



// componentupdate


// import React, { Component } from 'react'
// import Counter from './Components/Counter';

// export class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       count :0
//     }
//   }
//   componentDidMount(){
//     console.log('Raju');

//   }
//   increment(){
//     this.setState({count:this.state.count+1})
//   } 
//   render() {
//     return (
//       <div>
 
//   <Counter number={this.state.count}></Counter>
//         <button onClick ={() =>{this.increment()}}>click me</button>
//       </div>
//     )
//   }
// }

// export default App

// import React, { Component } from 'react'
// import Counter1 from './Components/Counter1';

// export class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       count :0
//     }
//   }
//   componentDidMount(){
//     console.log('Raju');

//   }
//   increment(){
//     this.setState({count:this.state.count+1})
//   } 
//   render() {
//     return (
//       <div>
 
//   <Counter1 number={this.state.count}></Counter1>
//         <button onClick ={() =>{this.increment()}}>click me</button>
//       </div>
//     )
//   }
// }

// // export default App

// // import styled from 'styled-components';
// // import './App.css';

// // const StyledButton = styled.button`
// //   border: 3px solid red;
// //   background-color: beige;
// //   color: brown;
// //   padding: 15px 30px;
// //   text-align: center;
// // `


// // function App() {
// //   return (
// //     <div className="App">
// //     <button>Click me here</button>
// //     </div>
// //   );
// // }

// import "./App.css";
// import StyledButton, { FancyButton, SubmitButton } from "./Components/Button";

// function App() {
//   return (
//     <div className="App">
//       <StyledButton>Styled Button </StyledButton>
//       <div>
//         <br />
//       </div>
//       <StyledButton varient="outline">Styled Button</StyledButton>
//       <div>
//         <br />
//       </div>
//       <FancyButton>Hello Raju</FancyButton>
//       <div>
//         <br />
//       </div>
//       <SubmitButton>Submit The form</SubmitButton>
//     </div>
//   );
// }

// export default App;
