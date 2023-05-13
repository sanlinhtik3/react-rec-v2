import React from "react";

// Class Component
// class Go extends React.Component {
//   render() {
//     return <h1>Class Component</h1>
//   }
// }


// Function Component
// function App() {
//   return (
//     <div>
//       <h1>Ract Components</h1>
//     </div>
//   );
// }

const Phone = (props) => {
  return <h1>Hello Phone {props.brand} </h1>;
}

const App = () => {
  return (
    <div>
      <h1>Ract Components</h1>
      <Phone brand="iPhone" />
    </div>
  );
};

export default App